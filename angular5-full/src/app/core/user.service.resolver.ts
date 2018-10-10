import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { UserService } from './user.service';
import { UserInfo } from '../model/user.info'
import { Helper } from '../helpers';

@Injectable()
export class UserServiceResolver implements Resolve<UserInfo> {
    loggedInUser: UserInfo
    constructor(private userService: UserService, private router: Router, private helper: Helper) { }
    

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<UserInfo> {
        return this.userService.getUserInfo().then(data => {
            if (data) {
                this.loggedInUser = data.json().item;
                this.helper.setloggedInUser(this.loggedInUser);
                return data.json().item;
            }
        }, (err) => {
            this.helper.clearAccessToken();
            this.router.navigate(['/login']);
        });
    }
}