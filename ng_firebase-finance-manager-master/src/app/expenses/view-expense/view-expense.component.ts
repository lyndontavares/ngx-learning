import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';
import { ExpensesService } from '@app/services/expenses.service';

import { Expense } from '../expense.interface';

import { DeleteExpenseDialogComponent } from './dialogs/delete-expense-dialog/delete-expense-dialog.component';

@Component({
	selector: 'app-view-expense',
	templateUrl: './view-expense.component.html',
	styleUrls: ['./view-expense.component.scss']
})

export class ViewExpenseComponent implements OnInit {
	
	expenseId: string;
	expense: Expense;
    expense$: Observable<Expense>;

	deleteDialogRef: MatDialogRef<DeleteExpenseDialogComponent>;

	constructor(private authService: AuthService, private expensesService: ExpensesService, private db: AngularFirestore, private route: ActivatedRoute, private dialog: MatDialog) {		
		this.expense = this.expensesService.selectedExpense;
	}

	ngOnInit() {
		
	}
	
	ngAfterViewInit() {
		
	}
	
	deleteExpense(userId, expenseId) {
		console.log('deleteExpense()');

		this.deleteDialogRef = this.dialog.open(DeleteExpenseDialogComponent, {
			hasBackdrop: true,
			data: {
				userId: this.authService.user.uid,
				expenseId: this.expenseId
			}
		})

	}

}
