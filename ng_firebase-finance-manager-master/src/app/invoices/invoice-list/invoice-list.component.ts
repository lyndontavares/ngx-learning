import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Invoice } from '../invoice.interface';

import { InvoicesService } from '@app/services/invoices.service';
import { AuthService } from '@app/services/auth.service';

@Component({
	selector: 'app-invoice-list',
	templateUrl: './invoice-list.component.html',
	styleUrls: ['./invoice-list.component.scss'],
})

export class InvoiceListComponent implements OnInit, AfterViewInit {

	invoices: Invoice[];

	// TODO: Remove on successful subscription directly via InvoicesService
	invoices$: Observable<Invoice[]>;

	invoicesData = new MatTableDataSource<Invoice>();
	
	tableColumns = [
		'invoiceId',
		'reference',
		'date',
		'contactName',
		'description',
		'total',
		'remainderDue'
	]

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private authService: AuthService, private invoicesService: InvoicesService, private db: AngularFirestore, private router: Router) {
	// TODO: Remove on successful subscription directly via InvoicesService
		this.invoices$ = this.invoicesService.invoicesCollection.valueChanges();
	}

	ngOnInit() {
		// TODO: Remove on successful subscription directly via InvoicesService
		this.getInvoices$()
			.subscribe(
				data => {
					if(data.length) {
						this.invoicesData.data  = data;
						console.log('InvoiceList.getInvoices$.subscribe().data:', data);
					} else {
						console.log('InvoiceList.getInvoices$,subscribe() - No invoices found');
					}
				},
				error => {
					console.log('InvoiceList.getInvoices$.subscribe() - Error getting invoices:', error);
				}
			)
	}

	// FIXME: Below method works in Dashbord component, not working here
	// ngOnInit() {
	// 	this.invoicesService.getInvoices$()
	// 		.subscribe(
	// 			data => {
	// 				if (data.length) {
	// 					this.invoices = data;
	// 					console.log('InvoiceList.invoicesService.getInvoices$():', this.invoices);
	// 				} else {
	// 					console.log('InvoiceList.invoicesService.getInvoices$() - No invoices in collection');
	// 				}
	// 			},
	// 			error => {
	// 				console.error('InvoiceList.invoicesService.getInvoices$() - Error getting invoices:', error);
	// 			}
	// 		)
	// }
	
	ngAfterViewInit() {
		this.invoicesData.paginator = this.paginator;
		this.invoicesData.sort = this.sort;
	}

	// TODO: Remove on successful subscription directly via InvoicesService
	getInvoices$() {
		return this.invoices$;
	}

	viewInvoice(invoice) {
		this.invoicesService.selectedInvoice = invoice;
		this.router.navigateByUrl(`/invoices/${invoice.id}`);
	}

}
