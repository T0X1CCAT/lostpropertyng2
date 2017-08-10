import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import {Injectable} from '@angular/core'
import {ItemService} from './item.service'
import {IItem} from './item.model'

@Injectable()
export class ItemExistsRouteActivator implements CanActivate{
    
    canActivate(route: ActivatedRouteSnapshot): boolean  {
        let itemExists = true;
        this.itemService.getItem(route.params['id']).subscribe(item =>{
            
            
            if(item){
                itemExists = true;
            }else{
                this.router.navigate(['/404']);
                itemExists = false;
            }
        });   
        return itemExists;
    }

    constructor(private itemService:ItemService, private router:Router){

    }



}