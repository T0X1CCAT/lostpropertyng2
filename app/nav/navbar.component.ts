import{Component,Inject} from '@angular/core'
import {Router} from '@angular/router'
import { TOASTR_TOKEN, Toastr} from '../shared/toastr.service';

import {AuthenticationService} from '../shared/authentication.service'
import {IUser} from '../shared/user.model'

@Component({
	selector:'nav-bar',
	templateUrl:'/app/nav/navbar.component.html',
	styles: [`
		.nav.navbar-nav {font-size: 24px}
		li > a.active {color: orange}
	`]
})
export class NavbarComponent{
	constructor(private authentication:AuthenticationService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){

		
	}	

	logout(){
		this.authentication.logout();
		this.router.navigate(['/home']);
    	this.toastr.success('Logout Successful!');
	}
}