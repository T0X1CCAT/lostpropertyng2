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
import {LoginComponent} from './shared/login.component'


import {appRoutes} from './routes'

import {LostPropertyAppComponent} from './lostProperty-app.component'

import { TOASTR_TOKEN, Toastr} from './shared/toastr.service'

declare let toastr: Toastr;

@NgModule({
	imports:[BrowserModule,
			RouterModule.forRoot(appRoutes),
			FormsModule, HttpModule,
			DatepickerModule.forRoot()],
	providers:[CategoryService, ItemService, AuthenticationService,
			{ provide: TOASTR_TOKEN, useValue: toastr }],
	declarations:[LostPropertyAppComponent,
					NavbarComponent,
					HomeComponent,
					FindComponent,
					LoginComponent],
	bootstrap:[LostPropertyAppComponent]
})
export class AppModule{}