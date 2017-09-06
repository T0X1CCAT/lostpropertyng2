import {Component,OnInit} from '@angular/core'
import {CategoryService} from './shared/category.service'
import {ICategory} from './shared/category.model'
import {PagingService} from './shared/paging.service'

@Component({
    templateUrl: '/app/list-categories.component.html',
    providers: [PagingService]
})

export class ListCategoriesComponent implements OnInit{
    ngOnInit(): void {
        console.log('on init listr cate comp');
        this.getCategories();
    }
    pageSize:number=5;
    
    constructor(private categoryService:CategoryService, private pagingService:PagingService){


    }

    private getCategories(){

        this.categoryService.getCategories().subscribe( categories =>{
            this.pagingService.setPagingCollection(categories, this.pageSize); 
        });
    }
}