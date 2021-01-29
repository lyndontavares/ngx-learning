# Angular Dashboard 

## Criando app

```
ng new mydash
sudo ng add @angular/material
sudo npm install --save @angular/http
sudo npm install --save @covalent/core
```

## Shared Module

```
ng g m shared/covalent
ng g m shared/material
```

### Material Module

```javascript
import {NgModule} from '@angular/core';

import {
  MatButtonModule, 
  MatListModule, 
  MatIconModule, 
  MatCardModule, 
  MatMenuModule, 
  MatInputModule, 
  MatButtonToggleModule,
  MatProgressSpinnerModule, 
  MatSelectModule, 
  MatSlideToggleModule, 
  MatDialogModule, 
  MatSnackBarModule, 
  MatToolbarModule,
  MatTabsModule, 
  MatSidenavModule, 
  MatTooltipModule, 
  MatRippleModule, 
  MatRadioModule, 
  MatGridListModule,
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatSliderModule, 
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatListModule, 
    MatIconModule, 
    MatCardModule, 
    MatMenuModule, 
    MatInputModule, 
    MatButtonToggleModule,
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    MatTabsModule, 
    MatSidenavModule, 
    MatTooltipModule, 
    MatRippleModule, 
    MatRadioModule, 
    MatGridListModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSliderModule, 
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule, 
    MatListModule, 
    MatIconModule, 
    MatCardModule, 
    MatMenuModule, 
    MatInputModule, 
    MatButtonToggleModule,
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    MatTabsModule, 
    MatSidenavModule, 
    MatTooltipModule, 
    MatRippleModule, 
    MatRadioModule, 
    MatGridListModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSliderModule, 
    MatAutocompleteModule
  ],
})

export class MaterialModule {
}
```

### Covalent Module

```javascript

import {NgModule} from '@angular/core';

import { 
    CovalentCommonModule, 
    CovalentLayoutModule, 
    CovalentMediaModule, 
    CovalentExpansionPanelModule,
    CovalentStepsModule, 
    CovalentLoadingModule, 
    CovalentDialogsModule, 
    CovalentSearchModule, 
    CovalentPagingModule,
    CovalentNotificationsModule, 
    CovalentMenuModule, 
    CovalentDataTableModule, 
    CovalentMessageModule, 
    CovalentFileModule 
} from '@covalent/core';

@NgModule({
  imports: [
    CovalentCommonModule, 
    CovalentLayoutModule, 
    CovalentMediaModule, 
    CovalentExpansionPanelModule,
    CovalentStepsModule, 
    CovalentLoadingModule, 
    CovalentDialogsModule, 
    CovalentSearchModule, 
    CovalentPagingModule,
    CovalentNotificationsModule, 
    CovalentMenuModule, 
    CovalentDataTableModule, 
    CovalentMessageModule, 
    CovalentFileModule 
  ],
  exports: [
    CovalentCommonModule, 
    CovalentLayoutModule, 
    CovalentMediaModule, 
    CovalentExpansionPanelModule,
    CovalentStepsModule, 
    CovalentLoadingModule, 
    CovalentDialogsModule, 
    CovalentSearchModule, 
    CovalentPagingModule,
    CovalentNotificationsModule, 
    CovalentMenuModule, 
    CovalentDataTableModule, 
    CovalentMessageModule, 
    CovalentFileModule 
  ],
})

export class CovalentModule {
}
```

## Adicionado Módulos (app.module.ts)

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material/material.module';
import { CovalentModule } from './shared/covalent/covalent.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    /** Material Modules */
    MaterialModule,
    /** Covalent Modules */
    CovalentModule,
    routing
    ],
  declarations: [ 
    AppComponent, 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { 
 
}

```

## Component boostrap (app.component)

### app.component.html

```html
<td-layout #layout>
        <td-navigation-drawer flex [sidenavTitle]="name" logo="assets:covalent" name="Usuário" email="lyndon.tavares@datapar.com.py">
            <mat-nav-list>
                
                <a *ngFor="let item of routes" mat-list-item>
                    
                    <div routerLink="{{item.route}}" (click)="layout.close()" >
                        <mat-icon>{{item.icon}}</mat-icon>{{item.title}}
                    </div>        
                </a>
                
            </mat-nav-list>
        </td-navigation-drawer>

<router-outlet></router-outlet>

</td-layout>
```

### app.component.ts

```javascript
import { Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'My Dash 1.0';

  routes: Object[] = [{
    icon: 'dashboard',
    route: 'dash',
    title: 'Dashboard',
  }, 
  {
    icon: 'perm_identity',
    route: 'login',
    title: 'Login',
  }
  
  ];

  constructor(public media: TdMediaService) {
  }
}


```

### Form de contatos (form.component.ts)

>  ng g c form --spec=false

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = "Novo";

  user: { name: { first: string; last: string; }; 
  email: string; nickname: string; address: { street: string; street2: string; city: string; state: string; postcode: string; }; };

  constructor() { }

  ngOnInit() {
    this.user = {
      name: {
        first: '',
        last: '',
      },
      email: '',
      nickname: '',
      address: {
         street: '',
         street2: '',
         city: '',
         state: '',
         postcode: '',
      }
    };
  }

}

```

### form.component.html
``` html
 
	<td-layout-nav logo="assets:covalent" toolbarTitle="Novo" navigationRoute="/">
		<button mat-icon-button td-menu-button tdLayoutToggle>
      <mat-icon>menu</mat-icon>
    </button>
		<td-layout-card-over cardTitle="New User">
			<mat-card-content>
				<td-steps>
					<td-step [state]="state1" #step1 label="Profile" sublabel="Name, Phone, Email, Password" active="true" (deactivated)="update(1, form1.form.valid)">
						<form #form1="ngForm" (ngSubmit)="save(form1.form.valid)" novalidate>
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="First name" #firstName required name="name" [(ngModel)]="user.name.first"
									 ngControl="user.name.first">
								</mat-form-field>
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Last name" #lastName required name="last" [(ngModel)]="user.name.last"
									 ngControl="user.name.last">
								</mat-form-field>
							</div>
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input class="form-control" matInput #nickname placeholder="Nickname">
								</mat-form-field>
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Email" #email required name="email" [(ngModel)]="user.email" ngControl="user.email">
								</mat-form-field>
							</div>
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Password" #password required minlength="6" name="password" type="password"
									 [(ngModel)]="user.password" ngControl="user.password">
									<mat-hint align="end">{{ password.value.length }} / 6 min</mat-hint>
								</mat-form-field>
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Confirm Password" #password2 required minlength="6" name="password2" type="password"
									 [(ngModel)]="user.password2" ngControl="user.password2">
									<mat-hint align="end">Must match</mat-hint>
								</mat-form-field>
							</div>
							<div class="push-top">
								<button mat-button type="submit" color="accent" [disabled]="!form1.form.valid" (click)="step2.active = true">Proceed</button>
								<button mat-button (click)="step1.active = false; state1 = 'none'; form1.reset()">Cancel</button>
							</div>
							<ng-template td-step-summary>
								<mat-list>
									<mat-list-item>
										<mat-icon matListAvatar>account_box</mat-icon>
										<h4 matLine>{{firstName.value}} {{lastName.value}}</h4>
										<p matLine>{{nickname.value}}</p>
										<p matLine>{{email.value}}</p>
									</mat-list-item>
								</mat-list>
							</ng-template>
						</form>
					</td-step>
					<td-step [state]="state2" #step2 label="Address" sublabel="Street, City, State, Zip" (deactivated)="update(2, form2.form.valid)">
						<form #form2="ngForm" (ngSubmit)="save(form2.form.valid)">
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Address" #street required name="street" [(ngModel)]="user.address.street"
									 ngControl="user.address.street">
								</mat-form-field>
							</div>
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input matInput class="form-control" placeholder="Address 2" #street2 name="street2" [(ngModel)]="user.address.street2" ngControl="user.address.street2">
								</mat-form-field>
							</div>
							<div layout-gt-xs="row">
								<mat-form-field flex>
									<input matInput #city placeholder="City" required>
								</mat-form-field>
								<div layout-gt-xs="row">
									<mat-form-field flex>
										<mat-select class="form-control" #selState placeholder="State" required name="state" [(ngModel)]="user.address.state" ngControl="user.address.state">
											<mat-option *ngFor="let state of states" [value]="state">
												{{ state }}
											</mat-option>
										</mat-select>
									</mat-form-field>
								</div>
								<div layout-gt-xs="row">
									<mat-form-field>
										<input matInput maxlength="5" placeholder="Zip Code" required #zip name="zip" [(ngModel)]="user.address.zip" ngControl="user.address.zip">
										<mat-hint align="end">{{ zip.value.length }} / 5</mat-hint>
									</mat-form-field>
								</div>
							</div>
							<div class="push-top">
								<button type="submit" mat-button color="accent" [disabled]="!form2.form.valid" (click)="step3.active = true">Proceed</button>
								<button (click)="step2.active = false; state2 = 'none'; form2.reset()" mat-button>Cancel</button>
							</div>
							<ng-template td-step-summary>
								<mat-list>
									<mat-list-item>
										<mat-icon matListAvatar>place</mat-icon>
										<h5 matLine>{{ street.value }} {{ street2.value}}</h5>
										<h5 matLine>{{city.value}} {{selState.value}} {{zip.value}}</h5>
										<p matLine>Address</p>
									</mat-list-item>
								</mat-list>
							</ng-template>
						</form>
					</td-step>
					<td-step [state]="state3" #step3 label="Social Media (Optional)" sublabel="Link your account" (deactivated)="update(3, form3.form.valid)">
						<form #form3="ngForm">

              <div layout="row">
								<mat-form-field flex>
									<input matInput #linkedIn placeholder="LinkedIn">
									<mat-hint align="end">https://linkedin.com/yourName</mat-hint>
								</mat-form-field>
							</div>
							<div layout="row">
								<mat-form-field flex>
									<input matInput #facebook placeholder="Facebook">
									<mat-hint align="end">https://facebook.com/yourName</mat-hint>
								</mat-form-field>
							</div>
							<div layout="row">
								<mat-form-field flex>
									<input matInput #twitter placeholder="Twitter">
									<mat-hint align="end">https://facebook.com/yourHandle</mat-hint>
								</mat-form-field>
							</div>
							<div class="push-top">
								<button type="submit" mat-button color="accent" (click)="step3.active = false">Proceed</button>
								<button mat-button (click)="step3.active = false; state3 = 'none'; form3.reset()">Cancel</button>
							</div>
 
						</form>
					</td-step>
				</td-steps>
			</mat-card-content>
			<mat-divider></mat-divider>
			<mat-card-actions>
				<button mat-button routerLink="/dash" color="accent" class="text-upper">Save</button>
				<button mat-button routerLink="/dash" class="text-upper">Cancel</button>
			</mat-card-actions>
		</td-layout-card-over>
	</td-layout-nav>
 
```

### Login ( login.component.ts)

>  ng g c form --spec=false

```javascript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: ' ';
  password: ' ';

  loading = false;
  returnUrl: string;
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
  }

}
```

### login.component.html

```html
<div layout="column" layout-fill>
 
  <div class="mat-content" layout-padding flex>
    <div layout-gt-xs="row" layout-align-gt-xs="center start" class="margin">
      <div flex-gt-xs="30">

        <mat-card tdMediaToggle="gt-xs" [mediaClasses]="['push-top-lg']">
          <mat-card-title><mat-icon class="mat-icon-logo" svgIcon="assets:covalent"></mat-icon></mat-card-title>
          <mat-card-subtitle>sign in via your current corporate account</mat-card-subtitle>
          <mat-divider></mat-divider>
          <mat-card-content>
            <form #loginForm="ngForm">
              <div layout="row">
                <mat-form-field flex> 
                  <input matInput #userElement #userControl="ngModel" placeholder="Username" type="text" maxlength="30" name="username" [(ngModel)]="username" required>
                  <span mat-prefix><mat-icon>person</mat-icon></span>
                  <mat-hint align="start">
                    <span [hidden]="!userControl.errors?.required || userControl.pristine" class="tc-red-600">Required</span>
                  </mat-hint>
                  <mat-hint align="end">{{userElement.value.length}} / 30</mat-hint>
                </mat-form-field>
              </div>
              <div layout="row">
                <mat-form-field flex> 
                  <input matInput #passElement #passControl="ngModel" placeholder="Password" type="password" name="password" [(ngModel)]="password" required>
                  <span mat-prefix><mat-icon>lock</mat-icon></span>
                  <mat-hint align="start">
                    <span [hidden]="!passControl.errors?.required || passControl.pristine" class="tc-red-600">Required</span>
                  </mat-hint>
                  <mat-hint align="end">Something hard to guess</mat-hint>
                </mat-form-field>
              </div>
            </form>
          </mat-card-content>
          <mat-divider></mat-divider>
          <mat-card-actions layout="row">
            <button flex mat-raised-button color="accent" [disabled]="!loginForm.form.valid" (click)="login()">Sign In</button>
            <a mat-button [routerLink]="['/dash']">Register</a>
          </mat-card-actions>
        </mat-card>
          <!--  <ab-alert></ab-alert> -->
      </div>
    </div>    
  </div>
</div>
 
```

### login.module

> ng g m login/login

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

```

### login-routing.module

> ng g m login-routing

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

``` 

### form.module / form-routing.module / dash.module / dash-routing.module

> Siga o exemple do login.module e login-routing.module

## Lazyload (app.routing)
O exemplo abaixo garante o carregamento lazy dos módulos dash,form e login. Verifique no browser.

```javascript

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' , pathMatch: 'full' },
  { path: 'dash', loadChildren: './dash/dash.module#DashModule' },
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', loadChildren: './login/login.module#LoginModule' }
];

export const routing = RouterModule.forRoot(appRoutes);

```

## Angular 7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
