import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()

export class AuthService {
  isLoggedIn(): boolean {
    return (localStorage.getItem("isLoggedIn")==="1");
  }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string): Observable<boolean> {

    if (username=="willi" && password == "willi" ) {
      localStorage.setItem("isLoggedIn","1");
      return Observable.of(true);
    }
    return Observable.of(false);

    //return Observable.of(true).delay(1000).do(val => true);
  }

  logout(): void {
    localStorage.removeItem("isLoggedIn");
  }
}