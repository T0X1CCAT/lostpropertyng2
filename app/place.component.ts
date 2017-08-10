import {Component,Inject} from '@angular/core'
import {CategoryService} from './shared/category.service'
import {ItemService} from './shared/item.service'
import {IItem} from './shared/item.model'
import {ICategory} from './shared/category.model'
import { TOASTR_TOKEN, Toastr} from './shared/toastr.service';
import {ActivatedRoute} from '@angular/router'
import {MOMENT_TOKEN} from './shared/moment.service'
import {JQ_TOKEN} from './shared/jQuery.service'

import {OnInit} from '@angular/core'


@Component({
    templateUrl: '/app/place.component.html'
})

export class PlaceItemComponent implements OnInit{
    _id: string;
    itemName: string;
    itemDescription:string;
    itemCategory:any;
    itemDate:Date;
    itemTime:Date = new Date();
    itemLostOrFound:string='';
    itemLocation:string;
    located:Boolean;

    
    
    categories:ICategory[];
    submissionAttempted:boolean=false;
    //itemTime: Date = new Date();
    submitButtonDisabled:Boolean = false;
    showFoundButton: boolean = false;
    showUpdateButton:boolean = false;
    showSaveButton:boolean = true;
    showDeleteButton:boolean = false;

    constructor(private categoryService:CategoryService, 
                private itemService:ItemService, @Inject(TOASTR_TOKEN) private toastr: Toastr,
                private activatedRouter:ActivatedRoute,
                 @Inject(MOMENT_TOKEN) private moment:any,
                 @Inject(JQ_TOKEN) private $:any
                ){
        // this.dateLost = moment().set({'year': 2013, 'month': 1, day:4});             

    }


    placeItem(form){
        this.submissionAttempted = true;
        if(!form.invalid){
            console.log('formvalues', form.value);
             this.itemService.placeItem(form.value).subscribe(response =>{
                console.log('response', response);
                if(response.status==='ok'){
                    this.toastr.success("item successfully placed");
                    this.submitButtonDisabled = true;
                    this.showFoundButton=true;
                    this.showUpdateButton=true;
                    this.showDeleteButton=true;
                    this.showSaveButton=false;
                }
            });
        }else{
            console.log('valid formvalues', form.value);
           
        }
    }

    isInvalid(field){
        if(field){
            if( (field.touched && field.invalid) ||
                (this.submissionAttempted && field.invalid)){
                return true;
            }else{
                return false;
            }
        }    

    }

    compareCategory(category1, category2){
        if(category1._id === category2._id){
            return true;

        }else{
            return false;
        }
    }
    updateItem(form){
        this.submissionAttempted = true;
        if(!form.invalid){
             this.itemService.updateItem(form.value).subscribe(response =>{
                if(response.status==='ok'){
                    this.toastr.success("item successfully placed");
                   
                }
            });
        }else{
            console.log('valid formvalues', form.value);
           
        }
    }

    deleteItem(){
        this.$('#deleteConfirm').modal('toggle');
        this.itemService.deleteItem(this._id).subscribe(response=>{
            console.log('response', response);
            if(response.status ==='ok'){
                this.toastr.success("Item successfully deleted");
                 this.showFoundButton=false;
                 this.showUpdateButton=false;
                 this.showDeleteButton=false;
            }else{
                this.toastr.error("Item not successfully deleted");
            }    
        });
    }
    itemLocated(){
         this.itemService.locateItem(this._id).subscribe(response=>{
            console.log('response', response);
            if(response.status ==='ok'){
                this.toastr.success("Item successfully located");
                 this.showFoundButton=false;
            }else{
                this.toastr.error("Item not successfully located");
            }    
        });
    }
    ngOnInit(){
		this.categoryService.getCategories().subscribe(categories => {
			this.categories = categories;
        });
        if(this.activatedRouter.snapshot.data['item'] != null){
            let item = <IItem>this.activatedRouter.snapshot.data['item'];
            this._id = item._id;
            this.itemName = item.itemName;
            this.itemDescription = item.itemDescription;
            this.itemCategory = item.itemCategory;
            this.itemDate = item.itemDate;
            this.itemTime = item.itemTime;
            this.itemLocation = item.itemLocation;

            this.itemLostOrFound = item.itemLostOrFound;
            this.located = item.located;

            if(this.located==false){
                this.showFoundButton=true;    
            }
            this.showUpdateButton=true;
            this.showDeleteButton=true;
            this.showSaveButton = false;

        
        }
        
	}
}