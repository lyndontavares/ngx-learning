import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';
import { ContactsService } from '@app/services/contacts.service';

import { Contact } from '../contact.interface';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit, AfterViewInit {
	
	tableColumns = [ 
        'contactId',
		'name',
		'telephone',
		'email',
		'vatNumber'
    ]

	contacts$: Observable<Contact[]>;
	contactsData = new MatTableDataSource<Contact>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(public authService: AuthService, private contactsService: ContactsService, private db: AngularFirestore, private router: Router) {
		this.contacts$ = this.contactsService.contactsCollection.valueChanges();
	}

	ngOnInit() {
		this.getContacts$()
			.subscribe(
				data => {
					if (data.length) {
						this.contactsData.data = data;
						console.log('ContactList.getContacts().subscribe().data:', data);
					} else {
						console.log('ContactList.getContacts().subscribe() - No contacts found');
					}
				},
				error => {
					console.log(`ContactList.getContacts().subscribe() - Error getting contacts: ${error}`);
				}
			)
	}
	
	ngAfterViewInit() {
		this.contactsData.paginator = this.paginator;
		this.contactsData.sort = this.sort;
	}

	getContacts$() {
		return this.contacts$;
	}

	viewContact(contact) {
		this.contactsService.selectedContact = contact;
		this.router.navigateByUrl(`/contacts/${contact.id}`);
	}

}
