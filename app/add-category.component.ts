import {Component,Inject} from '@angular/core'
import {CategoryService} from './shared/category.service'
import {Router} from '@angular/router'
import {TOASTR_TOKEN, Toastr} from './shared/toastr.service'


@Component({
    templateUrl: '/app/add-category.component.html'
})


export class AddCategoryComponent{
    constructor( private router:Router,private categoryService:CategoryService, @Inject(TOASTR_TOKEN) private toastr: Toastr){
        
    }
    addCategory(formValues){
        console.log('formvalues', formValues);
        this.categoryService.addCategory(formValues).subscribe(response  => {
            console.log('add category', response);
            if (response.status === 'ok'){
                this.router.navigate(['/home']);
                this.toastr.success('Category successfully created');
            }else if (response.status === 'name_exists'){
                this.toastr.error('Sorry, category already exists');
            }
        });
              
    }
}
