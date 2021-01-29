import { Injectable } from '@angular/core';

import { Bank } from '@app/invoices/bank.interface';

@Injectable()
export class BankService {
	
	bank: Bank;
	banks: Array<Bank>;
	
	selectedBankId: number;
	selectedBank: Bank;

	constructor() {
		this.bank = {
			id: '1',
			bankId: 1,
			bankName: 'Halifax',
			bankReference: 'Halifax',
			accountNumber: '01234567',
			accountReference: 'Halifax',
			sortCode: '11-11-11'
		}

		// Get banks in future app update
		// this.banks = this.db.collection('users').doc(this.userId).collection('banks').valueChanges();
	}

	// Get selected bank in future app update
	// getSelectedBank(bankId) {
	// 	this.selectedBankId = bankId;
	// 	this.selectedBank = this.db.collection('users').doc(this.userId).collection('banks').doc(bankId).valueChanges();
	// }

}