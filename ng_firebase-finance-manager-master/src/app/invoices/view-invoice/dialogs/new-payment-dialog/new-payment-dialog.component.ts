import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuerySnapshot } from '@firebase/firestore-types';
import * as moment from 'moment';

import { InvoicePayment } from '@app/invoices/invoice-payment.interface';
import { Bank } from '@app/invoices/bank.interface';

import { InvoicesService } from '@app/services/invoices.service';
import { BankService } from '@app/services/bank.service';

@Component({
  selector: 'app-new-payment-dialog',
  templateUrl: './new-payment-dialog.component.html',
  styleUrls: ['./new-payment-dialog.component.scss']
})

export class NewPaymentDialogComponent implements OnInit {

	newPaymentForm: FormGroup = this.formBuilder.group({
    reference: new FormControl(''),
    date: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(0.01), Validators.max(this.data.invoice.remainderDue)])
  })
  
  banks: Bank[];
  selectedBankId: number;
  selectedBank: any;

  payment: InvoicePayment;
  payments: InvoicePayment[];

  minPaymentDate: Date;
  maxPaymentDate: Date;

  amountErrorMessage: string = null;

  constructor(private dialogRef: MatDialogRef<NewPaymentDialogComponent>, @Inject (MAT_DIALOG_DATA) private data, private formBuilder: FormBuilder, private invoicesService: InvoicesService, public bankService: BankService) {
    // this.banks = this.data.banks; FUTURE RELEASE
    this.minPaymentDate = new Date(this.data.invoice.date);
    this.maxPaymentDate = new Date();
  }

  ngOnInit() {
    // FUTURE RELEASE
    // this.bankService.getSelectedBank(this.selectedBank);
    // console.log('NewPaymentDialog.BankService.getSelectedBank:', this.bankService.selectedBank);
  }

  validateAmount() {
    if (parseFloat(this.newPaymentForm.get('amount').value) > this.data.invoice.remainderDue) {
      this.amountErrorMessage = 'Greater than remainder due';
    } else if (parseFloat(this.newPaymentForm.get('amount').value) == 0) {
      this.amountErrorMessage = 'Must be £0.01 or greater';
    } else {
      this.amountErrorMessage = null;
    }
  }

  addPayment() {
    this.payment = {
      id: this.invoicesService.invoicesCollection.doc(this.data.invoice.id).collection('/payments').ref.doc().id,
      paymentId: this.data.payments.length + 1,
      reference: this.newPaymentForm.get('reference').value,
      date: new Date(this.newPaymentForm.get('date').value),
      amount: +parseFloat(this.newPaymentForm.get('amount').value).toFixed(2),
      bank: this.bankService.bank // TEMP

      // FUTURE RELEASE
      // , bank: this.bankService.selectedBank
    }

    console.log('addPayment():', this.payment);

    this.dialogRef.close(this.payment);
  }

}