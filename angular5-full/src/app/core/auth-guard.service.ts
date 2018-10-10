import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';
import { Helper } from '../helpers';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router, private helper: Helper) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        let getloggedInUser = this.helper.getloggedInUser();

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let getloggedInUser = this.helper.getloggedInUser();
        if (getloggedInUser.Role == 'SuperAdmin') {
            return this.canActivate(route, state);
        } else {
            //console.log('Unauthorized to open link: ' + state.url);
            this.router.navigate(['/app']);
            return false;
        }
        
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        //Check Local Store
        let getSecurityHeaders = this.helper.getSecurityHeaders();
        if (getSecurityHeaders.name && getSecurityHeaders.val) {
            this.authService.isLoggedIn = true;
            return true;
        }

        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Create a dummy session id
        let sessionId = 123456789;

        // Set our navigation extras object
        // that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        // Navigate to the login page
        this.router.navigate(['/login']);
        // Navigate to the login page with extras
        //this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}