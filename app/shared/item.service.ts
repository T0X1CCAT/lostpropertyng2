import {Http,Response,Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/RX'
import {IItem} from './item.model'
import { Injectable } from '@angular/core'

@Injectable()
export class ItemService{

    constructor(private http:Http){

    }
    findItems (item:IItem):Observable<IItem[]>{

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        //need to wrap object with data attribute because backend is expecting thisx`
        var data = {data : item};
      

        return this.http.post('/api/findItem', JSON.stringify(data),
            options).map((response:Response) => {
                return response.json();
            }).catch(this.handleError);

    }

    private handleError(error) {
        return Observable.throw(error.statusText);
    } 

}