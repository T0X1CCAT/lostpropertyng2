import {Http,Response,Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/RX'
import {ICategory} from './category.model'
import { Injectable } from '@angular/core'
import {AuthenticationService} from './authentication.service'

@Injectable()
export class CategoryService{

    constructor(private http:Http, private authentication:AuthenticationService){

    }
    getCategories ():Observable<ICategory[]>{
        return this.http.get('/api/category').map((response:Response) =>{
            return <ICategory[]>response.json();
        }).catch(this.handleError);
    }

    addCategory(category:ICategory):Observable<any>{
        
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        return this.http.post('/api/category', JSON.stringify(category), options).map((response:Response) =>{
            return response.json();
        }).catch(this.handleError);
    }

    private handleError(error) {
        return Observable.throw(error.statusText);
    } 
}