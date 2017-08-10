import {Http,Response,Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/RX'
import {IItem} from './item.model'
import { Injectable,Inject } from '@angular/core'
import {AuthenticationService} from './authentication.service'
import {MOMENT_TOKEN} from './moment.service'
    

@Injectable()
export class ItemService{

    constructor(private http:Http, private authentication:AuthenticationService,
                 @Inject(MOMENT_TOKEN) private moment:any){

    }
    findItems (item:any):Observable<IItem[]>{

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        //need to wrap object with data attribute because backend is expecting thisx`
        var data = {data : item};
      

        return this.http.post('/api/findItem', data,
            options).map((response:Response) => {
                return response.json();
            }).catch(this.handleError);

    }
    deleteItem(id:string){
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        return this.http.post('/api/deleteItem?id='+id,null, options).map((response:Response) =>{
            console.log('response', response);
            return response.json();
        }).catch(this.handleError);
    }
    locateItem(id:string){
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        return this.http.post('/api/itemLocated?id='+id,null, options).map((response:Response) =>{
            console.log('response', response);
            return response.json();
        }).catch(this.handleError);
    }
    updateItem(item:IItem){
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        //kind of a hack because date input returns a formatted string date
        item.itemDate = this.moment(item.itemDate, 'DD/MM/YYYY');

        return this.http.post('/api/updateItem', JSON.stringify(item), options).map((response:Response) =>{
            return response.json();
        }).catch(this.handleError);
    }
    placeItem(item:any){
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        //kind of a hack because date input returns a formatted string date
        item.itemDate = this.moment(item.itemDate, 'DD/MM/YYYY');
        //item.itemCategory = JSON.stringify(item.itemCategory);

        return this.http.post('/api/place', JSON.stringify(item), options).map((response:Response) =>{
            return response.json();
        }).catch(this.handleError);
    }

    getItem(itemId:string):Observable<IItem>{
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        return this.http.get('/api/place?id='+itemId, options).map((response:Response) =>{
            console.log('tom');
            if(response.text() === ''){
                return null;
            }else{
                return <IItem>response.json();
            }    

        }).catch(this.handleError);

    }
    private handleError(error) {
        return Observable.throw(error.statusText);
    } 

}