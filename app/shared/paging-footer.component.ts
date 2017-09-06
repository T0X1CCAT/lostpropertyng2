import {Component,Input, Output, EventEmitter} from '@angular/core'
import { PagingService } from "./paging.service";

@Component({
    selector:'paging-footer',
    templateUrl:'/app/shared/paging-footer.component.html'
    
})
export class PagingFooter {

    constructor(private pagingService:PagingService){

    }
    
    nextPage(){
        this.pagingService.nextPage();   
    }
    getPages(){
        return this.pagingService.getPages();
    }
    previousPage(){
        this.pagingService.previousPage();
    }    

    hasPrevious(){
        return  this.pagingService.hasPrevious();
    }

    hasNext(){
        return this.pagingService.hasNext();
        
    }

    gotoPage(pageNumber){
        this.pagingService.gotoPage(pageNumber);
        
    }

    currentPage(){
        return this.pagingService.currentPage;
    }
}
 