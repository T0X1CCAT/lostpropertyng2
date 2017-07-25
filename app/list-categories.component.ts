import {Component,OnInit} from '@angular/core'
import {CategoryService} from './shared/category.service'
import {ICategory} from './shared/category.model'

@Component({
    templateUrl: '/app/list-categories.component.html'
})

export class ListCategoriesComponent implements OnInit{
    ngOnInit(): void {
        this.getCategories();
    }

    categories:ICategory[];
    categoryPage:ICategory[];
    pageSize:number=5;
    currentPage:number=0;
    categoryPages:number = 0;

    constructor(private categoryService:CategoryService){

    }

    nextPage(){
        if(this.hasNext()){
            let newStartPosition = (this.currentPage+1)*this.pageSize;
            let newEndPosition = ((this.currentPage+2)*this.pageSize) > this.categories.length ? this.categories.length : (((this.currentPage+2)*this.pageSize));
            this.categoryPage = this.categories.slice(newStartPosition, newEndPosition);
            this.currentPage +=1;
            
        }   
    }

    previousPage(){
        if(this.hasPrevious()){
            let newStartPosition = null;
            let newEndPosition = null;
            if(this.currentPage == 1){
                newStartPosition = 0;    
                newEndPosition = this.currentPage * this.pageSize;
            }else{
                newStartPosition = (this.currentPage-1)*this.pageSize;
                newEndPosition = this.currentPage*this.pageSize;
            }
            this.categoryPage = this.categories.slice(newStartPosition, newEndPosition);
            this.currentPage -=1;
        }     
    }

    hasPrevious(){
        return  (this.currentPage > 0);

    }
    gotoPage(pageNumber){
        let newStartPosition = pageNumber*this.pageSize;
        let newEndPosition = ((pageNumber+1)*this.pageSize);
        this.categoryPage = this.categories.slice(newStartPosition, newEndPosition);
        this.currentPage = pageNumber;
    }
    getCategoryPages(){
        return new Array(this.categoryPages);
    };

    hasNext(){
        if(this.categories){
            return (this.currentPage+1)*this.pageSize < this.categories.length;
        }else{
            return false;
        }    


    }
    private getCategories(){

        this.categoryService.getCategories().subscribe( categories =>{
            this.categories = categories;
            this.categoryPage = this.categories.slice(0,this.categories.length < this.pageSize ? this.categories.length : this.pageSize);
            this.categoryPages = Math.ceil(this.categories.length / this.pageSize);
        });
    }
}