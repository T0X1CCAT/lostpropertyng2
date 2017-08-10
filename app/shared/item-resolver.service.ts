import {Injectable} from '@angular/core'
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {ItemService} from './item.service'

@Injectable()
export class ItemResolverService implements Resolve<any>{
    constructor(private itemService:ItemService){

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.itemService.getItem(route.params['id']);
    
    
    }

}