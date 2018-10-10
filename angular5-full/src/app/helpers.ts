import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class Helper {
    constructor(private storage: LocalStorageService, private session :SessionStorageService) { }

    setAccessToken(accessToken: string, userName: string, expired: string): void {
        this.storage.store('wc_ssid', accessToken);
        this.storage.store('wc_name', userName);
        this.storage.store('wc_expired', expired);
    }

    setloggedInUser(loggedInUser: any): void {
        this.storage.store('wc_user', loggedInUser);
    }

    clearAccessToken(): void {
        this.storage.clear('wc_ssid');
        this.storage.clear('wc_name');
        this.storage.clear('wc_expired');
        this.storage.clear('wc_user');
    }

    getloggedInUser() {
        var loggedInUser = this.storage.retrieve('wc_user');

        if (loggedInUser) {
            return loggedInUser;
        }

        return null;
    }

    getUserName() {
        var userName = this.storage.retrieve('wc_name');

        if (userName) {
            return userName;
        }

        return '';
    }

    isAuthenticated() {
        var accessToken = this.storage.retrieve('wc_ssid');

        if (accessToken) {
            return true;
        }

        return false;
    }

    getSecurityHeaders() {
        var accessToken = this.storage.retrieve('wc_ssid');

        if (accessToken) {
            return { name: 'Authorization', val: 'Bearer ' + accessToken };
        }

        return { name: '', val: '' };
    }

    getExpired() {
        var expired = this.storage.retrieve('wc_expired');

        if (expired) {
            return expired;
        }

        return '';
    }
}