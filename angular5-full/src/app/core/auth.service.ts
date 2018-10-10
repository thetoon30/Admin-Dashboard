import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Helper } from '../helpers';
import { environment } from '../../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private apiUrl = environment.apiUrl + 'api/Account/';  // URL to web API
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http, private helper: Helper) { }

    login(data: any) {
        return this.http.post(this.apiUrl + 'Login', data, { headers: this.getHeaders() })
            .toPromise().then(res => {
                this.isLoggedIn = true;
                return Promise.resolve(res);
            }, (err) => {
                return Promise.reject(err);
            });
    }

    logout() {
        return this.http.post(this.apiUrl + 'Logout', null, { headers: this.getSecurityHeaders() })
            .toPromise().then(res => {
                this.isLoggedIn = false;
                this.helper.clearAccessToken();
                return Promise.resolve(res);
            }, (err) => {
                return Promise.reject(err);
            });
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private getSecurityHeaders() {
        let headers = new Headers();
        let getSecurityHeaders = this.helper.getSecurityHeaders();
        headers.append(getSecurityHeaders.name, getSecurityHeaders.val);
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}