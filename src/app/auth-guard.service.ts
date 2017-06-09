import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');

        let url: string = routerState.url;
        console.log(url);

        return this.checkLogin(url);
    }

    canActivateChild(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
        return this.canActivate(activatedRoute,routerState);
    }

}