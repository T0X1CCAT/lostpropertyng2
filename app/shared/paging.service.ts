import { Injectable } from '@angular/core';

@Injectable()
export class PagingService {

    pagingCollection:any[];
    pageSize:number;
    currentPage:number;
    page:any[];

    setPageSize(pageSize){
        this.pageSize = pageSize;
    }
    setPagingCollection(pagingCollection, pageSize){
        this.pagingCollection = pagingCollection;
        this.setPageSize(pageSize);
        this.currentPage=0;
        this.page = this.pagingCollection.slice(0,this.pagingCollection.length < this.pageSize ? this.pagingCollection.length : this.pageSize);
    }

    getPage(){
        if(this.pagingCollection){
            this.page = this.pagingCollection.slice(0,this.pagingCollection.length < this.pageSize ? this.pagingCollection.length : this.pageSize);
        }    
    }

    gotoPage(pageNumber){
        let newStartPosition = pageNumber*this.pageSize;
        let newEndPosition = ((pageNumber+1)*this.pageSize);
        this.page = this.pagingCollection.slice(newStartPosition, newEndPosition);
        this.currentPage = pageNumber;
    }
    getPages(){
        if(this.pagingCollection){
            return new Array(Math.ceil(this.pagingCollection.length/this.pageSize));
        }    
    }

    hasPrevious(){
        return this.currentPage > 0;
    }

    hasNext(){
        
        if(this.pagingCollection){
            return (this.currentPage+1)*this.pageSize < this.pagingCollection.length;
        }else{
            return false;
        }
    }
    
    nextPage(){
        if(this.hasNext()){
            let newStartPosition = (this.currentPage+1)*this.pageSize;
            let newEndPosition = ((this.currentPage+2)*this.pageSize) > this.pagingCollection.length ? this.pagingCollection.length : (((this.currentPage+2)*this.pageSize));
            this.page = this.pagingCollection.slice(newStartPosition, newEndPosition);
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
            this.page = this.pagingCollection.slice(newStartPosition, newEndPosition);
            this.currentPage -=1;
        }
    }    
  
}