import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';
import { UserService } from '@app/services/user.service';
import { ContactsService } from '@app/services/contacts.service';
import { ExpensesService } from '@app/services/expenses.service';
import { InvoicesService } from '@app/services/invoices.service';
import { NominalsService, Nominal } from '../services/nominals.service';
import { TaxCodesService, TaxCode } from '../services/tax-codes.service';

import { Invoice } from '@app/invoices/invoice.interface';
import { Expense } from '@app/expenses/expense.interface';
import { Contact } from '@app/contacts/contact.interface';

import { fadeInAnimation } from '@app/router-animations';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
		styleUrls: ['./dashboard.component.scss'],
		animations: [
			fadeInAnimation
		],
		host: { '[@fadeInAnimation]': '' }
})

export class DashboardComponent implements OnInit {

	// NG2-CHART TEST
	chartTestData:Array<any>= [
		{
			data: [ 52000, 51400, 64000, 64150, 65600, 71000 ], 
			label: 'Income'
		},
		{
			data: [ 64000, 63450, 62300, 60050, 57600, 63900 ], 
			label: 'Expenses'
		}
	] 

	chartTestLabels: Array<any> = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun'
	]

	chartTestOptions: any = {
		responsive: true
	}

	chartTestColours: Array<any> = [
		{ // grey
		  backgroundColor: 'rgba(148,159,177,0.2)',
		  borderColor: 'rgba(148,159,177,1)',
		  pointBackgroundColor: 'rgba(148,159,177,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
		  backgroundColor: 'rgba(77,83,96,0.2)',
		  borderColor: 'rgba(77,83,96,1)',
		  pointBackgroundColor: 'rgba(77,83,96,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(77,83,96,1)'
		}
	]

	chartTestLegend: boolean = true;

	//
	
	contacts: Contact[];
	expenses: Expense[];
	invoices: Invoice[];
	nominals: Nominal[];
	taxCodes: TaxCode[];

	constructor(private db: AngularFirestore, private authService: AuthService, private userService: UserService, private contactsService: ContactsService, private expensesService: ExpensesService, private invoicesService: InvoicesService, private nominalsService: NominalsService, private taxCodesService: TaxCodesService, private router: Router, private route: ActivatedRoute) {
		
	}
	
	
	ngOnInit() {

		this.contactsService.getContacts$()
			.subscribe(
				data => {
					if (data.length) {
						this.contacts = data;
						console.log('Dashboard.contactsService.getContacts$():', this.contacts);
					} else {
						console.log('Dashboard.contactsService.getContacts$() - No contacts in collection');
					}
				},
				error => {
					console.error(`Dashboard.contactsService.getContacts$() - Error getting contacts: ${error.message}`);
				}
			)

		this.expensesService.getExpenses$()
			.subscribe(
				data => {
					if (data.length) {
						this.expenses = data;
						console.log('Dashboard.expensesService.getExpenses$():', this.expenses);
					} else {
						console.log('Dashboard.expensesService.getExpenses$() - No expenses in collection');
					}
				},
				error => {
					console.error(`Dashboard.expensesService.getExpenses$() - Error getting expenses: ${error.message}`);
				}
			)
		
		this.invoicesService.getInvoices$()
			.subscribe(
				data => {
					if (data.length) {
						this.invoices = data;
						console.log('Dashboard.invoicesService.getInvoices$():', this.invoices);
					} else {
						console.log('Dashboard.invoicesService.getInvoices$() - No invoices in collection');
					}
				},
				error => {
					console.error(`Dashboard.invoicesService.getInvoices$() - Error getting invoices: ${error.message}`);
				}
			)

		this.nominalsService.getNominals$()
			.subscribe(
				data => {
					if (data.length) {
						this.nominals = data;
						console.log('Dashboard.nominalsService.getNominals$():', this.nominals);
					} else {
						console.log('Dashboard.nominalsService.getNominals$() - No nominals in collection');
					}
				},
				error => {
					console.error(`Dashboard.nominalsService.getNominals$() - Error getting nominals: ${error.message}`);
				}
			)

		this.taxCodesService.getTaxCodes$()
			.subscribe(
				data => {
					if (data.length) {
						this.taxCodes = data;
						console.log('Dashboard.taxCodesService.getTaxCodes$():', this.taxCodes);
					} else {
						console.log('Dashboard.taxCodesService.getTaxCodes$() - No tax codes in collection');
					}
				},
				error => {
					console.error(`Dashboard.taxCodesService.getTaxCodes$() - Error getting tax codes: ${error.message}`);
				}
			)
	}

}
