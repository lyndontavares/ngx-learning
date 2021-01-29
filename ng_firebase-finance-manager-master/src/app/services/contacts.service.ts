import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { NotificationsService } from './notifications.service';

import { Contact } from '@app/contacts/contact.interface';

@Injectable()
export class ContactsService {

  selectedContact: Contact;

  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts$: Observable<Contact[]>;
  contacts: Contact[];

  constructor(private db: AngularFirestore, private authService: AuthService, private notifService: NotificationsService) {
    
    this.contactsCollection = this.db.collection('/users').doc(this.authService.user.uid).collection('/contacts');
    
    this.contacts$ = this.contactsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Contact;
          data.id = a.payload.doc.id;
          return data;
        })
      }),
      catchError(err => observableOf(null))
    )
  }

  getContacts$() {
    return this.contacts$;
  }

}
