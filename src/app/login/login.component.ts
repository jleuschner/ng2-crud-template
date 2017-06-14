import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <label>Username</label>
    <input type="text" [(ngModel)]="username">
    <label>Password</label>
    <input type="password" [(ngModel)]="password">
    <p>
    {{username}} / {{password}}
      <button (click)="login()"  *ngIf="!authService.isLoggedIn()">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn()">Logout</button>
    </p>`
})
export class LoginComponent {

  message: string;
  private username: string = "willi";
  private password: string ="willi";

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.username,this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        // Redirect the user
        this.router.navigate([redirect]);
      } else {
        console.log("WRONG");
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
    this.router.navigate(["/"]);
  }
}