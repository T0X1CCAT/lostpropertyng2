import {Component } from '@angular/core'
import {OnInit} from '@angular/core'
import {ICategory} from './shared/category.model'
import {CategoryService} from './shared/category.service'
import * as moment from 'moment';
import {ItemService} from './shared/item.service'
import {IItem} from './shared/item.model'
import {AuthenticationService} from './shared/authentication.service'

@Component({
	templateUrl: '/app/find.component.html'
			
})
export class FindComponent implements OnInit{
	categories: ICategory[];
	items: IItem[] =[];

	public events: any[];


	constructor(private authentication:AuthenticationService,
				 private categoryService:CategoryService, 
				  private itemService:ItemService){

	}
	
	findItems(formValues){
		console.log(formValues);
		this.itemService.findItems(formValues).subscribe(items => {
			this.items = items;
		});
		
		
	}



	ngOnInit(){
		this.categoryService.getCategories().subscribe(categories => {
			this.categories = categories
		});

	}
	
	
}