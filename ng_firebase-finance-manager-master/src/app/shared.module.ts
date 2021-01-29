import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR RESOURCES
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTING
// import { AppRoutingModule } from './app-routing.module';
import { RouterLinkActive, CanActivate } from '@angular/router';
import { CanActivateRouteGuard } from './can-activate-route.guard';

// HTTP
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// MOMENTJS
import * as _moment from 'moment';

// LODASH
import * as _ from 'lodash';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// ELECTRON
import { NgxElectronModule } from 'ngx-electron';

// NG2-CHARTS
import { ChartsModule } from 'ng2-charts';

// PIPES
import { SortByPipe } from './pipes/sort-by.pipe';

// GLOBAL DIRECTIVES
import { ParseIntDirective } from './directives/parse-int.directive';
import { ParseFloatDirective } from './directives/parse-float.directive';

// SERVICES
import { AuthService } from './services/auth.service';
import { BankService } from './services/bank.service';
import { DocumentsService } from './services/documents.service';
import { ContactsService } from '@app/services/contacts.service';
import { ExpensesService } from '@app/services/expenses.service';
import { InvoicesService } from '@app/services/invoices.service';
import { TaxCodesService } from './services/tax-codes.service';
import { NominalsService } from './services/nominals.service';
import { NotificationsService } from './services/notifications.service';
import { UserService } from './services/user.service';

@NgModule({

	declarations: [
		// PIPES
        SortByPipe,
		
		// DIRECTIVES
        ParseIntDirective,
		ParseFloatDirective,
	],

	imports: [
		CommonModule,

		// ANGULAR RESOURCES
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,

		// ROUTING
		// AppRoutingModule,

		// HTTP
		HttpModule,
		HttpClientModule,

		// FIREBASE
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		AngularFireStorageModule,
		AngularFirestoreModule,

		// ELECTRON
		NgxElectronModule,

		// NG2-CHARTS
		ChartsModule
	],

	exports: [
		// ANGULAR RESOURCES
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,

		// ROUTING
		// AppRoutingModule,

		// HTTP
		HttpModule,
		HttpClientModule,

		// FIREBASE
		AngularFireModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		AngularFireStorageModule,
		AngularFirestoreModule,

		// ELECTRON
		NgxElectronModule,

		// NG2-CHARTS
		ChartsModule,

		// PIPES
        SortByPipe,
		
		// GLOBAL DIRECTIVES
        ParseIntDirective,
		ParseFloatDirective,
	],

	providers: [
		CanActivateRouteGuard,

		// SERVICES
		AuthService,
		BankService,
		DocumentsService,
		ContactsService,
		InvoicesService,
		ExpensesService,
        TaxCodesService,
        NominalsService,
		NotificationsService,
		UserService
	]
})

export class SharedModule {

}