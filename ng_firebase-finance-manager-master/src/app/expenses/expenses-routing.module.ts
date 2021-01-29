import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

// COMPONENTS
	import { NewExpenseComponent } from './new-expense/new-expense.component';
	import { ExpenseListComponent } from './expense-list/expense-list.component';
	import { ViewExpenseComponent } from './view-expense/view-expense.component';

const routes: Routes = [
	{
		path: 'expenses/new',
		component: NewExpenseComponent
	},
	{
		path: 'expenses/all',
		component: ExpenseListComponent
	},
	{
		path: 'expenses/:id',
		component: ViewExpenseComponent
	},
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  
  exports: [
    RouterModule
  ]

})

export class ExpensesRoutingModule {

}