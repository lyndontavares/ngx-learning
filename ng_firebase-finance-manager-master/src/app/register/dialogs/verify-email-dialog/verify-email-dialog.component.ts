import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-verify-email-dialog',
  template: `
    <h1 mat-dialog-title>Registration Successful</h1>

    <mat-dialog-content>
      <p>A verification email has been sent to your account.</p>
      <p>Please click the link in the email to verify your account before logging in.</p>
      <br>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})

export class VerifyEmailDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<VerifyEmailDialogComponent>, private dialog: MatDialog) { }

  ngOnInit() {

  }

}
