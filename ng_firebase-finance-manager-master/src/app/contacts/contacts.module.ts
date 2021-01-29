import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

// SHARED/MATERIAL MODULES
import { SharedModule } from '@app/shared.module';
import { MaterialModule } from '@app/material.module';

// COMPONENTS
	// New Contact
	import { NewContactComponent } from './new-contact/new-contact.component';
	// Contact List
	import { ContactListComponent } from './contact-list/contact-list.component';
	// View Contact
	import { ViewContactComponent } from './view-contact/view-contact.component';
		// Dialogs
		import { DeleteContactDialogComponent } from './view-contact/dialogs/delete-contact-dialog/delete-contact-dialog.component';

@NgModule({

	imports: [
		CommonModule,
		ContactsRoutingModule,
		SharedModule,
		MaterialModule
	],

	declarations: [
		// COMPONENTS
			// New Contact
			NewContactComponent,
			// Contact List
			ContactListComponent,
			// View Contact
			ViewContactComponent,
				// Dialogs
				DeleteContactDialogComponent
	],

	entryComponents: [
		// DIALOGS
			// View Contact
			DeleteContactDialogComponent
	]
})

export class ContactsModule {

}