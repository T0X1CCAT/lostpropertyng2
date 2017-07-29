import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http'
import { DatepickerModule } from 'ngx-bootstrap';
import {NavbarComponent} from './nav/navbar.component'
import {HomeComponent} from './home.component'
import {FindComponent} from './find.component'
import {CategoryService} from './shared/category.service'
import {ItemService} from './shared/item.service'
import {AuthenticationService} from './shared/authentication.service'
import {LoginComponent} from './login.component'
import {AddCategoryComponent} from './add-category.component'
import {ListCategoriesComponent} from './list-categories.component'
import {RegisterComponent} from './register.component'
import {DateInputComponent} from './shared/date-input.component'
import {PlaceItemComponent} from './place.component'

import {appRoutes} from './routes'

import {LostPropertyAppComponent} from './lostProperty-app.component'

import { TOASTR_TOKEN, Toastr} from './shared/toastr.service'
import {JQ_TOKEN} from './shared/jQuery.service'
import {MOMENT_TOKEN} from './shared/moment.service'

declare let toastr: Toastr;
declare let jQuery: Object;
declare let moment: Object;

@NgModule({
	imports:[BrowserModule,
			RouterModule.forRoot(appRoutes),
			FormsModule, HttpModule,
			DatepickerModule.forRoot()],
	providers:[CategoryService, ItemService, AuthenticationService,
			{ provide: TOASTR_TOKEN, useValue: toastr },
			{provide: JQ_TOKEN, useValue:jQuery},
			{provide: MOMENT_TOKEN, useValue:moment}],
	declarations:[LostPropertyAppComponent,
					NavbarComponent,
					HomeComponent,
					FindComponent,
					LoginComponent,
					AddCategoryComponent,
					ListCategoriesComponent,
					RegisterComponent,
					DateInputComponent,
					PlaceItemComponent],
	bootstrap:[LostPropertyAppComponent]
})
export class AppModule{}