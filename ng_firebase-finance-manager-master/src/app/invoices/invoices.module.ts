import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';

// SHARED/MATERIAL MODULES
import { SharedModule } from '@app/shared.module';
import { MaterialModule } from '@app/material.module';

// COMPONENTS
	import { NewItemDialogComponent } from './dialogs/new-item-dialog/new-item-dialog.component';
	// New Invoice
	import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
		// Dialogs
		import { NewContactDialogComponent } from './new-invoice/dialogs/new-contact-dialog/new-contact-dialog.component';
	// Invoice List
	import { InvoiceListComponent } from './invoice-list/invoice-list.component';
	// View Invoice
	import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
		// Dialogs
		import { NewPaymentDialogComponent } from './view-invoice/dialogs/new-payment-dialog/new-payment-dialog.component';
		import { DeleteInvoiceDialogComponent } from './view-invoice/dialogs/delete-invoice-dialog.component';
		// Directives
		import { DownloadInvoicePdfDirective } from './view-invoice/directives/download-invoice-pdf/download-invoice-pdf.directive';
		import { EmailInvoiceDirective } from './view-invoice/directives/email-invoice/email-invoice.directive';
		import { DuplicateInvoiceDirective } from './view-invoice/directives/duplicate-invoice/duplicate-invoice.directive';
	// Edit Invoice
	import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
		// Dialogs
		import { EditReferenceDialogComponent } from './edit-invoice/dialogs/edit-reference-dialog/edit-reference-dialog.component';

@NgModule({

	imports: [
		CommonModule,
		InvoicesRoutingModule,
		SharedModule,
		MaterialModule
	],

	declarations: [
		// COMPONENTS
		NewItemDialogComponent,
			// New Invoice
			NewInvoiceComponent,
			// Invoice List
			InvoiceListComponent,	
			// View Invoice
			ViewInvoiceComponent,
				NewPaymentDialogComponent,
				DeleteInvoiceDialogComponent,
			// Edit Invoice
			EditInvoiceComponent,
				// Dialogs
				EditReferenceDialogComponent,

		// DIRECTIVES
		DownloadInvoicePdfDirective,
		EmailInvoiceDirective,
		DuplicateInvoiceDirective,
		NewContactDialogComponent,
	],
	
	entryComponents: [
		// DIALOGS
			NewItemDialogComponent,
			// New Invoice
			NewContactDialogComponent,
			// View Invoice
			NewPaymentDialogComponent,
			DeleteInvoiceDialogComponent,
			// Edit Invoice
			EditReferenceDialogComponent
	]
})

export class InvoicesModule {

}