import {Routes} from '@angular/router'
import {HomeComponent} from './home.component'
import {FindComponent} from './find.component'
import {LoginComponent} from './shared/login.component'


export const appRoutes:Routes=[
	{path: 'find', component: FindComponent},
    {path:'home', component: HomeComponent},
	{path: 'login', component:LoginComponent},
	{path: '', redirectTo: '/home', pathMatch:'full'}

]