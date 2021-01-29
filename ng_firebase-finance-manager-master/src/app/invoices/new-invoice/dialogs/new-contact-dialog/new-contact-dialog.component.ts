import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Contact } from '@app/contacts/contact.interface';

import { ContactsService } from '@app/services/contacts.service';
import { NotificationsService } from '@app/services/notifications.service';

@Component({
	selector: 'app-new-contact-dialog',
	templateUrl: './new-contact-dialog.component.html',
	styleUrls: ['./new-contact-dialog.component.scss']
})

export class NewContactDialogComponent implements OnInit {

	basicDetailsGroup: FormGroup = this.formBuilder.group({
		name: new FormControl('', [Validators.required]),
	})

	addressGroup: FormGroup = this.formBuilder.group({
		addressLine1: new FormControl('', [Validators.required]),
		addressLine2: new FormControl(''),
		townCity: new FormControl('', [Validators.required]),
		county: new FormControl('', [Validators.required]),
		postcode: new FormControl('', [Validators.required]),
	})

	contactDetailsGroup: FormGroup = this.formBuilder.group({
		primaryTelephone: new FormControl('', [Validators.required]),
		secondaryTelephone: new FormControl(''),
		primaryEmail: new FormControl('', [Validators.required]),
		secondaryEmail: new FormControl(''),
	})

	bankDetailsGroup: FormGroup = this.formBuilder.group({
		bankName: new FormControl('', [Validators.required]),
		bankReference: new FormControl('', [Validators.required]),
		accountNumber: new FormControl('', [Validators.required]),
		sortCode: new FormControl('', [Validators.required]),
		vatNumber: new FormControl('', [Validators.required])
	})

	contact: Contact;

	constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, @Inject (MAT_DIALOG_DATA) private data, private formBuilder: FormBuilder, private contactsService: ContactsService, private notifService: NotificationsService) {

	}

	ngOnInit() {

	}

	addContact() {

		let newDocRef = this.contactsService.contactsCollection.ref.doc().id;

		this.contact = {
			id: newDocRef,
			contactId: this.data.numberOfContacts + 1,
			name: this.basicDetailsGroup.get('name').value,
			address: {
				addressLine1: this.addressGroup.get('addressLine1').value,
				addressLine2: this.addressGroup.get('addressLine2').value,
				townCity: this.addressGroup.get('townCity').value,
				county: this.addressGroup.get('county').value,
				postcode: this.addressGroup.get('postcode').value
			},
			primaryTelephone: this.contactDetailsGroup.get('primaryTelephone').value,
			secondaryTelephone: this.contactDetailsGroup.get('secondaryTelephone').value,
			primaryEmail: this.contactDetailsGroup.get('primaryEmail').value,
			secondaryEmail: this.contactDetailsGroup.get('secondaryEmail').value,
			bank: {
				bankName: this.bankDetailsGroup.get('bankName').value,
				bankReference: this.bankDetailsGroup.get('bankReference').value,
				accountNumber: this.bankDetailsGroup.get('accountNumber').value,
				sortCode: this.bankDetailsGroup.get('sortCode').value
			},
			vatNumber: this.bankDetailsGroup.get('vatNumber').value
		}

		this.contactsService.contactsCollection.doc(newDocRef).set(this.contact)
			.then(docRef => {
				console.log('NewContactDialog.saveContact() - Successfully saved contact:', docRef);
				this.notifService.showNotification('New contact saved', 'Close');
			})
			.catch(err => {
				console.error(`NewContatDialog.saveContact() - Error saving contact: ${err.Message}`);
				this.notifService.showNotification(`Error saving new contact: ${err.Message}`, null);
			})

		this.dialogRef.close(this.contact);

	}

}