import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';

// SHARED/MATERIAL MODULES
import { SharedModule } from '@app/shared.module';
import { MaterialModule } from '@app/material.module';

// COMPONENTS
	// New Expense
	import { NewExpenseComponent } from './new-expense/new-expense.component';
	// Expense List
	import { ExpenseListComponent } from './expense-list/expense-list.component';
	// View Expense
	import { ViewExpenseComponent } from './view-expense/view-expense.component';
		// Dialogs
		import { DeleteExpenseDialogComponent } from './view-expense/dialogs/delete-expense-dialog/delete-expense-dialog.component';

@NgModule({

	imports: [
		CommonModule,
		ExpensesRoutingModule,
		SharedModule,
		MaterialModule
	],

	declarations: [
		// COMPONENTS
			// New Expense
			NewExpenseComponent,
			// Expense List
			ExpenseListComponent,
			// View Expense
			ViewExpenseComponent,
				// Dialogs
				DeleteExpenseDialogComponent
	],

	entryComponents: [
		// DIALOGS
			// View Expense
			DeleteExpenseDialogComponent
	]

})

export class ExpensesModule {

}