import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';

import { InvoicesService } from '@app/services/invoices.service';
import { NotificationsService } from '@app/services/notifications.service';

@Component({
  selector: 'app-delete-invoice-dialog',
  template: `
    <h1 mat-dialog-title>Delete Invoice</h1>

    <mat-dialog-content>
      <p>Are you sure you want to delete this invoice?</p>
      <p>This action cannot be undone.</p>   
    </mat-dialog-content>

    <br>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button (click)="confirmDeletion()" color="warn">Confirm Deletion</button>
    </mat-dialog-actions>
  `
})

export class DeleteInvoiceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteInvoiceDialogComponent>, private router: Router, private db: AngularFirestore, private invoicesService: InvoicesService, private notifService: NotificationsService, @Inject (MAT_DIALOG_DATA) private data) {
    
  }

  ngOnInit() {
    
  }

  confirmDeletion() {
    console.log(`Try confirmDeletion() - User #${this.data.userId}, Invoice #${this.data.invoiceId}`);

    this.dialogRef.close();
    
    this.invoicesService.invoicesCollection.doc(this.data.invoiceId).delete()
      .then(() => {
        console.log('Invoice successfully deleted');
        this.router.navigateByUrl('/invoices/all');
        this.notifService.showNotification('Invoice successfully deleted', 'Close');
      })
      .catch(error => {
        console.error(`Error deleting invoice: ${error.message}`);
      })
  }

}