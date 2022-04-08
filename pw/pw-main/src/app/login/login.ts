import {Component} from '@angular/core';

import {Router} from '@angular/router';

import {Observable} from 'rxjs';





import {User} from '../beans/user';
import {UserService} from '../services/userService';

@Component({
	selector: 'login',
	templateUrl: 'login.html'
})
export class Login {

	errorMessage: string= undefined;
	authenticationError: boolean;
	// loggedUser: User;

	//Form fields
	login: string;
	password: string;

	constructor(private router: Router, private userService: UserService) {}

	logUser () {
        this.userService.login({
            username: this.login,
            password: this.password,
            rememberMe: true
        }).then(() => {
        	this.authenticationError = false;
            this.router.navigate(['/home']);
        }).catch(() => {
            this.authenticationError = true;
        });
    }
}
