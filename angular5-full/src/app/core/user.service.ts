import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { ResponseBase, ListResponseBase } from '../model/list.response.base';
import { Helper } from '../helpers';
import { environment } from '../../environments/environment';

import { FileUploadService } from './upload.service';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private apiAccountUrl = environment.apiUrl + 'api/Account/';  // URL to web API
    private apiUrl = environment.apiUrl + 'api/User/';  // URL to web API

    constructor(private http: Http, private helper: Helper, private fileUploadService: FileUploadService) { }

    getUserInfo() {
        return this.http.get(this.apiAccountUrl + 'UserInfo', { headers: this.getSecurityHeaders() })
            .toPromise().then(res => {
                return Promise.resolve(res);
            }, (err) => {
                return Promise.reject(err);
            });
    }

    private getSecurityHeaders() {
        let headers = new Headers();
        let getSecurityHeaders = this.helper.getSecurityHeaders();
        headers.append(getSecurityHeaders.name, getSecurityHeaders.val);
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: Response;
        if (error instanceof Response) {
            errMsg = error;
        } else {
            errMsg.ok = false;
            errMsg.status = 500;
            errMsg.statusText = 'Server error';
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}