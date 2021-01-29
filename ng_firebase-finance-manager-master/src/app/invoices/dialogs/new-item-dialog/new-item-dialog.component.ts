import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { InvoiceItem } from '@app/invoices/invoice-item.interface';

import { TaxCodesService } from '@app/services/tax-codes.service';
import { QuerySnapshot } from '@firebase/firestore-types';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})

export class NewItemDialogComponent implements OnInit {

	newItemForm: FormGroup = this.formBuilder.group({
		description: new FormControl('', [Validators.required]),
		quantity: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required]),
    taxCode: new FormControl('', [Validators.required])
  })
  
  taxCodes: any[];
  selectedTaxCodeRate: number = 0;
  selectedTaxCode: any;

  item: InvoiceItem;
  items: InvoiceItem[];

  constructor(private dialogRef: MatDialogRef<NewItemDialogComponent>, @Inject (MAT_DIALOG_DATA) private data, private formBuilder: FormBuilder, public taxCodesService: TaxCodesService) {
    this.taxCodes = this.data.taxCodes;
    this.items = this.data.items;
  }

  ngOnInit() {
    this.taxCodesService.getSelectedTaxCode(this.selectedTaxCodeRate);
    console.log('NewItemDialog.TaxCodesService.getSelectedTaxCode:', this.taxCodesService.selectedTaxCode);
  }

  addItem() {
    let subtotal = this.newItemForm.get('quantity').value * this.newItemForm.get('unitPrice').value;
    let tax = this.newItemForm.get('quantity').value * (this.newItemForm.get('unitPrice').value * (this.taxCodesService.selectedTaxCode.rate / 100));
    let total = subtotal + tax;

    this.item = {
      id: null,
      itemId: null,
      description: this.newItemForm.get('description').value,
      quantity: this.newItemForm.get('quantity').value,
      unitPrice: this.newItemForm.get('unitPrice').value,
      subtotal: +subtotal.toFixed(2),
      taxCode: this.taxCodesService.selectedTaxCode,
      tax: +tax.toFixed(2),
      total: +total.toFixed(2)
    }

    console.log('NewItemDialog.addItem():', this.item);

    this.dialogRef.close(this.item);
  }

}