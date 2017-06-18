import {Component} from '@angular/core'

@Component({
	template: `
		<div class="container">
			<nav-bar></nav-bar>
			<router-outlet></router-outlet>
		</div>	
	`,
	selector: 'lostproperty-app'
})
export class LostPropertyAppComponent {
	
}