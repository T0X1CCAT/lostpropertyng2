import {Component } from '@angular/core'
import {OnInit} from '@angular/core'
import {ICategory} from './shared/category.model'
import {CategoryService} from './shared/category.service'
import * as moment from 'moment';
import {DatepickerModule} from 'ngx-bootstrap'
import {ItemService} from './shared/item.service'
import {IItem} from './shared/item.model'

@Component({
	templateUrl: '/app/find.component.html'
			
})
export class FindComponent implements OnInit{
	categories: ICategory[];
	items: IItem[] =[];
	public itemDate: Date = new Date();
	public minDate: Date = void 0;
	public events: any[];
	public tomorrow: Date;
	public afterTomorrow: Date;
	public dateDisabled: {date: Date, mode: string}[];
	public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
		'shortDate'];
	public format: string = this.formats[0];
	public dateOptions: any = {
		formatYear: 'YY',
		startingDay: 1
	};
	private opened: boolean = false;

	constructor(private categoryService:CategoryService, private itemService:ItemService){
		(this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
		(this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
		(this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
		(this.dateDisabled = []);
		this.events = [
			{date: this.tomorrow, status: 'full'},
			{date: this.afterTomorrow, status: 'partially'}
		];
	}
	
	findItems(formValues){
		console.log(formValues);
		this.itemService.findItems(formValues).subscribe(items => {
			this.items = items;
		});
		
		
	}

	public clear(): void {
		this.itemDate = void 0;
		this.dateDisabled = undefined;
	}
	// search (){
    //             $http.post(
    //                 "/api/findItem",{                        
    //                     data: model.searchModel
    //                 }
    //             ).then(
    //                 function successCallback(response) {
    //                     model.items = response.data;
    //                     model.itemPage = model.items.slice(0,model.items.length < model.pageSize ? model.items.length : model.pageSize);
    //                     model.itemPages = Math.ceil(model.items.length / model.pageSize);
                        
    //                 }, 
    //                 function errorCallback(response) {
    //                     // called asynchronously if an error occurs
    //                     // or server returns response with an error status.
    //                 });
    //     	}

	ngOnInit(){
		this.categoryService.getCategories().subscribe(categories => {
			this.categories = categories
		});

	}
	
	
}