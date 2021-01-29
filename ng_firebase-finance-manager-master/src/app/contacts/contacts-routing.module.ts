import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

// COMPONENTS
	import { NewContactComponent } from './new-contact/new-contact.component';
	import { ContactListComponent } from './contact-list/contact-list.component';
	import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
	{
		path: 'contacts/new',
		component: NewContactComponent
	},
	{
		path: 'contacts/all',
		component: ContactListComponent
	},
	{
		path: 'contacts/:id',
		component: ViewContactComponent
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

export class ContactsRoutingModule {

}