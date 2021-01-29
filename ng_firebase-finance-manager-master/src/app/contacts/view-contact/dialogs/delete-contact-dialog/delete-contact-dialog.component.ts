import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';

import { ContactsService } from '@app/services/contacts.service';
import { NotificationsService } from '@app/services/notifications.service';

@Component({
  selector: 'app-delete-contact-dialog',
  template: `
    <h1 mat-dialog-title>Delete Contact</h1>

    <mat-dialog-content>
      <p>Are you sure you want to delete this contact?</p>
      <p>This action cannot be undone.</p>   
    </mat-dialog-content>

    <br>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button (click)="confirmDeletion()" color="warn">Confirm Deletion</button>
    </mat-dialog-actions>
  `
})

export class DeleteContactDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteContactDialogComponent>, private router: Router, private db: AngularFirestore, private contactsService: ContactsService, private notifService: NotificationsService, @Inject (MAT_DIALOG_DATA) private data) {

  }

  ngOnInit() {

  }

  confirmDeletion() {
    console.log('Try confirmDeletion() - User #' + this.data.userId + ', Contact #' + this.data.contactId);

    this.dialogRef.close();
    
    this.contactsService.contactsCollection.doc(this.data.contactId).delete()
      .then(() => {
        console.log('Contact successfully deleted');
        this.router.navigateByUrl('/contacts/all');
        this.notifService.showNotification('Contact successfully deleted', 'Close');
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      })
  }

}
