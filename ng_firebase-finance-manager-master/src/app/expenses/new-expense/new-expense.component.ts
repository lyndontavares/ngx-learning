import { Component, OnInit } from '@angular/core';

import { ExpensesService } from '@app/services/expenses.service';
import { AuthService } from '@app/services/auth.service';

import { Expense } from '../expense.interface';

@Component({
    selector: 'app-new-expense',
    templateUrl: './new-expense.component.html',
    styleUrls: ['./new-expense.component.scss']
})

export class NewExpenseComponent implements OnInit {

    constructor(private authService: AuthService, private expensesService: ExpensesService) {
        
    }

    ngOnInit() {
		
    }

}
