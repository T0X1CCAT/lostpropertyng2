import {Component } from '@angular/core'
import {OnInit} from '@angular/core'
import {ICategory} from './shared/category.model'
import {CategoryService} from './shared/category.service'
import * as moment from 'moment';
import {ItemService} from './shared/item.service'
import {IItem} from './shared/item.model'
import {AuthenticationService} from './shared/authentication.service'
import {PagingService} from './shared/paging.service'

@Component({
	templateUrl: '/app/find.component.html',
	providers:[PagingService]
			
})
export class FindComponent implements OnInit{
	categories: ICategory[];
	items: IItem[] =[];

	public events: any[];


	constructor(private authentication:AuthenticationService,
				 private categoryService:CategoryService, 
				  private itemService:ItemService,
				 private pagingService:PagingService){

	}
	
	findItems(formValues){
		console.log(formValues);
		this.itemService.findItems(formValues).subscribe(items => {
			this.items = items;
			this.pagingService.setPagingCollection(items, 5);
		});
		
		
	}



	ngOnInit(){
		this.categoryService.getCategories().subscribe(categories => {
			this.categories = categories

		});

	}
	
	
}