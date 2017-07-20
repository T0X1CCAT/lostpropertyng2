import {Component,Inject } from '@angular/core'
import {AuthenticationService} from './authentication.service'
import {Router} from '@angular/router'
import { TOASTR_TOKEN, Toastr} from '../shared/toastr.service';

@Component({
	templateUrl: '/app/shared/login.component.html'
			
})

export class LoginComponent {

    constructor(private authService: AuthenticationService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){
        
    }

    login(formValues){
        console.log('formvalues', formValues);
        this.authService.login(formValues.email, formValues.password).subscribe(success => {
			if(success ===true){
				console.log('good');
                this.router.navigate(['/home']);
                this.toastr.success('Login Successful!');
			}else{
				console.log('bad', success);
                this.toastr.error('Username or password incorrect');
			} 
		}
        , (err) => {
            if (err === 'Unauthorized') { this.toastr.error('Username or password incorrect')};
        });
    }
}