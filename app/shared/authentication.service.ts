import {Http,Response,Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/RX'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthenticationService{

    constructor(private http:Http){

    }

    login (username:string, password:string){

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        //need to wrap object with data attribute because backend is expecting thisx`
        var data = {email : username, password: password};
      

    //   return this.http.post('api/login', JSON.stringify(data), options).do(resp => {
	// 		if(resp){
	// 			this.currentUser = <IUser>resp.json().user
	// 		}
	// 	}).catch(error => {
	// 		return Observable.of(false);
	// 	})		
        console.log('json data', JSON.stringify(data))
        return this.http.post('/api/login', JSON.stringify(data),
            options).map((response:Response) => {
                console.log('response', response.json());
                
                if(response.json().token){
                    this.saveToken(response.json().token);
                    return true;
                }else{
                    return false;
                }
                    
            }).catch(this.handleError);

    }

    private saveToken (token) {

      window.localStorage.setItem('lostproperty2-token',token);
    }

    private handleError(error) {
        return Observable.throw(error.statusText);
    } 
    //  var login = function(user) {
    //     return $http.post('/api/login', user)
    //         .then(
    //        function(response){
    //             if(response.data.token){
    //                 saveToken(response.data.token);
    //             }
    //             return response.data;    
 
    //         }, 
    //         function (errorResponse){
    //             if (errorResponse.status=='401'){
    //                 return {"errorMessage": "User or Password incorrect"};
    //             }else{
    //                 return {"errorMessage": "System error occured"};
    //             }    
    //         });
    // };
}