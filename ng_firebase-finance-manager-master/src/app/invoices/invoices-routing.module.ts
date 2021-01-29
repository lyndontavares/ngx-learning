import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

// COMPONENTS
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [
	{
		path: 'invoices/new',
		component: NewInvoiceComponent
	},
	{
		path: 'invoices/all',
		component: InvoiceListComponent
	},
	{
		path: 'invoices/:id',
		component: ViewInvoiceComponent
	},
	{
		path: 'invoices/:id/edit',
		component: EditInvoiceComponent
	},
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  
  exports: [
    RouterModule
  ]

})

export class InvoicesRoutingModule {

}