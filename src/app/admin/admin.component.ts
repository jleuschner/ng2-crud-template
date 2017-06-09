import { Component } from '@angular/core';


@Component({
  template:  `
    <h3>ADMIN-Route mit CanActivate-Guard</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./admin1" routerLinkActive="active">Admin1</a>
      <a routerLink="./admin2" routerLinkActive="active">Admin2</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}