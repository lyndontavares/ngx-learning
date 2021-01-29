import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';
import { ContactsService } from '@app/services/contacts.service';

import { Contact } from '../contact.interface';

import { DeleteContactDialogComponent } from './dialogs/delete-contact-dialog/delete-contact-dialog.component';

@Component({
	selector: 'app-view-contact',
	templateUrl: './view-contact.component.html',
	styleUrls: ['./view-contact.component.scss']
})

export class ViewContactComponent implements OnInit {
	
	userId: string;
	
	contactId: string;
    contact: Contact;

	deleteDialogRef: MatDialogRef<DeleteContactDialogComponent>;

	constructor(private db: AngularFirestore, private route: ActivatedRoute, public dialog: MatDialog, private authService: AuthService, private contactsService: ContactsService) {
		this.userId = this.authService.user.uid;
		
		this.contact = this.contactsService.selectedContact;
	}

	ngOnInit() {
		
	}
	
	ngAfterViewInit() {
		
	}
	
	editContact() {
		console.log('editContact()');
	}
	
	deleteContact(userId, contactId) {
		console.log('deleteContact()');

		this.deleteDialogRef = this.dialog.open(DeleteContactDialogComponent, {
			hasBackdrop: true,
			data: {
				userId: this.userId,
				contactId: this.contactId
			}
		})

	}

}
