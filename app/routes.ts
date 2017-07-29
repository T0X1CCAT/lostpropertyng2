import {Routes} from '@angular/router'
import {HomeComponent} from './home.component'
import {FindComponent} from './find.component'
import {LoginComponent} from './login.component'
import {AddCategoryComponent} from './add-category.component'
import {ListCategoriesComponent} from './list-categories.component'
import {RegisterComponent} from './register.component'
import {PlaceItemComponent} from './place.component'

export const appRoutes:Routes=[
	{path: 'find', component: FindComponent},
    {path:'home', component: HomeComponent},
	{path: 'login', component:LoginComponent},
	{path: 'addCategory', component:AddCategoryComponent},
	{path: 'register', component:RegisterComponent},
	{path: 'place', component:PlaceItemComponent},
	{path: 'listCategories', component:ListCategoriesComponent},
	{path: '', redirectTo: '/home', pathMatch:'full'}

]