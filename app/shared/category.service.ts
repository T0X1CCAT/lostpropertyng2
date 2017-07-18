import {Http,Response,Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/RX'
import {ICategory} from './category.model'
import { Injectable } from '@angular/core'

@Injectable()
export class CategoryService{

    constructor(private http:Http){

    }
    getCategories ():Observable<ICategory[]>{
        return this.http.get('/api/category').map((response:Response) =>{
            return <ICategory[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error) {
        return Observable.throw(error.statusText);
    } 
}