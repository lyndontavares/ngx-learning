import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';

import { ExpensesService } from '@app/services/expenses.service';
import { NotificationsService } from '@app/services/notifications.service';

@Component({
  selector: 'app-delete-expense-dialog',
  template: `
    <h1 mat-dialog-title>Delete Expense</h1>

    <mat-dialog-content>
      <p>Are you sure you want to delete this expense?</p>
      <p>This action cannot be undone.</p>   
    </mat-dialog-content>

    <br>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button (click)="confirmDeletion()" color="warn">Confirm Deletion</button>
    </mat-dialog-actions>
  `
})

export class DeleteExpenseDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteExpenseDialogComponent>, private router: Router, private db: AngularFirestore, private expensesService: ExpensesService, private notifService: NotificationsService, @Inject (MAT_DIALOG_DATA) private data) {

  }

  ngOnInit() {

  }

  confirmDeletion() {
    console.log(`Try confirmDeletion() - User #${this.data.userId}, Expense #${this.data.expenseId}`);

    this.dialogRef.close();
    
    this.expensesService.expensesCollection.doc(this.data.expenseId).delete()
      .then(() => {
        console.log('Expense successfully deleted');
        this.router.navigateByUrl('/expenses/all');
        this.notifService.showNotification('Expense successfully deleted', 'Close');
      })
      .catch(error => {
        console.error(`Error deleting expense: ${error}`);
      })
  }

}
