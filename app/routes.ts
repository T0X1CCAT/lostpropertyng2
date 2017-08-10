import {Routes} from '@angular/router'
import {HomeComponent} from './home.component'
import {FindComponent} from './find.component'
import {LoginComponent} from './login.component'
import {AddCategoryComponent} from './add-category.component'
import {ListCategoriesComponent} from './list-categories.component'
import {RegisterComponent} from './register.component'
import {PlaceItemComponent} from './place.component'
import {ItemExistsRouteActivator} from './shared/item-exists-route-activator.service'
import {Error404Component} from './shared/404.component'
import {ItemResolverService} from './shared/item-resolver.service'

export const appRoutes:Routes=[
	{path: 'find', component: FindComponent},
	{path: '404', component: Error404Component},
    {path:'home', component: HomeComponent},
	{path: 'login', component:LoginComponent},
	{path: 'addCategory', component:AddCategoryComponent},
	{path: 'register', component:RegisterComponent},
	{path: 'place', component:PlaceItemComponent},
	{path: 'editPlace', component:PlaceItemComponent,
		resolve: {item: ItemResolverService},
		canActivate: [ItemExistsRouteActivator]
	},
	{path: 'listCategories', component:ListCategoriesComponent},
	{path: '', redirectTo: '/home', pathMatch:'full'}

]