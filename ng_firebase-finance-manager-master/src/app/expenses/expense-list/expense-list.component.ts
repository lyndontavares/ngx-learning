import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';
import { ExpensesService } from '@app/services/expenses.service';

import { Expense } from '../expense.interface';

@Component({
	selector: 'app-expense-list',
	templateUrl: './expense-list.component.html',
	styleUrls: ['./expense-list.component.scss']
})

export class ExpenseListComponent implements OnInit, AfterViewInit {
	
	tableColumns = [ 
        'expenseId', 
        'reference', 
        'date', 
        'description', 
        'category', 
        'type', 
        'nominal', 
        'value',
        'tax', 
        'total' 
    ];

	@ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    expenses$: Observable<Expense[]>;
	expensesData = new MatTableDataSource<Expense>();

	constructor(private db: AngularFirestore, private authService: AuthService, private expensesService: ExpensesService, private router: Router) {
        this.expenses$ = this.expensesService.expensesCollection.valueChanges();
	}

	ngOnInit() {
		this.getExpenses$()
			.subscribe(
				data => {
					if (data.length) {
                        this.expensesData.data = data;
                        console.log('ExpenseList.getExpenses$().subscribe().data:', data);
					} else {
                        console.log('ExpenseList.getExpenses$().subscribe() - No expenses found');
					}
				},
				error => {
					console.error(`ExpenseList.getExpenses$().subscribe() - Error getting expenses: ${error}`);
				}
            )
	}
	
	ngAfterViewInit() {
        this.expensesData.paginator = this.paginator;
        this.expensesData.sort = this.sort;
	}
    
    getExpenses$() {
        return this.expenses$;
    }

    viewExpense(expense) {
        this.expensesService.selectedExpense = expense;
        this.router.navigateByUrl(`/expenses/${expense.id}`);
    }
    
}
