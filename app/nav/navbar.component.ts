import{Component} from '@angular/core'
@Component({
	selector:'nav-bar',
	templateUrl:'/app/nav/navbar.component.html',
	styles: [`
		.nav.navbar-nav {font-size: 24px}
		li > a.active {color: orange}
	`]
})
export class NavbarComponent{
	constructor(){
		
	}	
}