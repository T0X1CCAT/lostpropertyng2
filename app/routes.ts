import {Routes} from '@angular/router'
import {HomeComponent} from './home.component'
import {FindComponent} from './find.component'


export const appRoutes:Routes=[
	{path: 'find', component: FindComponent},
    {path:'home', component: HomeComponent},

	{path: '', redirectTo: '/home', pathMatch:'full'}

]