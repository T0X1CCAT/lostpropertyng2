import {Component,Inject} from '@angular/core'
import {AuthenticationService} from './shared/authentication.service'
import {Router} from '@angular/router'
import { TOASTR_TOKEN, Toastr} from './shared/toastr.service';

@Component({
    templateUrl: '/app/register.component.html'
})

export class RegisterComponent{

    constructor(private authentication:AuthenticationService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }
    register(formValues){
        this.authentication.register(formValues).subscribe( response => {
            if(response.errorMessage){
                this.toastr.error("Email has already been registered - choose another");

            }else{
                this.router.navigate(['/home']);
                this.toastr.success("Successful registration");

            }        
        });

    }
}