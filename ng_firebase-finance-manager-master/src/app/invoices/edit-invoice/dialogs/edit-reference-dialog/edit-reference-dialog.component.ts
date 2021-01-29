import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-edit-reference-dialog',
	template: `
	  <h1 mat-dialog-title>Edit Reference</h1>
  
	  <mat-dialog-content>

			<div class="form-group" fxLayout="row">

				<mat-form-field fxFlex="90%">

					<input matInput [(ngModel)]="reference">

				</mat-form-field>

			</div>

	  </mat-dialog-content>
  
	  <br>
  
	  <mat-dialog-actions align="end">

			<button mat-button mat-dialog-close>Cancel</button>

			<button mat-raised-button (click)="saveChange()" [disabled]="!reference.length">Save Change</button>

	  </mat-dialog-actions>
	`
})

export class EditReferenceDialogComponent implements OnInit {

	reference: string;

	constructor(private dialogRef: MatDialogRef<EditReferenceDialogComponent>, @Inject (MAT_DIALOG_DATA) private data) {
		this.reference = data.currentReference;
	}

	ngOnInit() {
		console.log(`EditReferenceDialog.currentReference: ${this.reference}`);
	}

	saveChange() {
		this.dialogRef.close(this.reference);
	}

}