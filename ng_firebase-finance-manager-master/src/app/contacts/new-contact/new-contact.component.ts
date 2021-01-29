import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/services/auth.service';
import { ContactsService } from '@app/services/contacts.service';

import { Contact } from '../contact.interface';

@Component({
	selector: 'app-new-contact',
	templateUrl: './new-contact.component.html',
	styleUrls: ['./new-contact.component.scss']
})

export class NewContactComponent implements OnInit {

	userId: string;

	constructor(private authService: AuthService, private contactsService: ContactsService) {
		this.userId = this.authService.user.uid;
	}

	ngOnInit() {
		
	}

}
