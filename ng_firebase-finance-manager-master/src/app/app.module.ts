// ANGULAR CORE
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// FEATURE MODULES
import { ContactsModule } from '@app/contacts/contacts.module';
import { ExpensesModule } from '@app/expenses/expenses.module';
import { InvoicesModule } from '@app/invoices/invoices.module';
import { BankModule } from '@app/bank/bank.module';
import { DocumentsModule } from '@app/documents/documents.module';

// APP ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';

// MATERIAL MODULE
import { MaterialModule } from '@app/material.module';

// SHARED MODULE
import { SharedModule } from '@app/shared.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'

	// Account
	import { LoginComponent } from './login/login.component'
	import { RegisterComponent } from './register/register.component'
	import { VerifyEmailDialogComponent } from './register/dialogs/verify-email-dialog/verify-email-dialog.component';

	// Notifications
	import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
	
	declarations: [
		AppComponent,
		
		// COMPONENTS
			// Dashboard
        	DashboardComponent,
			// Login
			LoginComponent,
			// Register
			RegisterComponent,
				// Dialogs
				VerifyEmailDialogComponent,
			// Notifications
			NotificationsComponent
	],
	
	imports: [
        // ANGULAR CORE
		BrowserModule,
		BrowserAnimationsModule,

		// FEATURE MODULES
		InvoicesModule,
		ContactsModule,
		ExpensesModule,
		BankModule,
		DocumentsModule,

		// APP ROUTING MODULE
		AppRoutingModule,

		// MATERIAL MODULE
		MaterialModule,

		// SHARED MODULE
		SharedModule
	],
	
	entryComponents: [
		// DIALOGS	
			// Register
			VerifyEmailDialogComponent
	],
	
	providers: [
		
	],
	
	bootstrap: [AppComponent]
})

export class AppModule { }