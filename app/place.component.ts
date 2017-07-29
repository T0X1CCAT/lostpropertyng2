import {Component} from '@angular/core'

@Component({
    templateUrl: '/app/place.component.html'
})

export class PlaceItemComponent{
    
    placeItem(formValues){
        console.log('formvalues', formValues);
    }
}