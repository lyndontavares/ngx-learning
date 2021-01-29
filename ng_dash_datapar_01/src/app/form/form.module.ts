import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    FormRoutingModule
  ]
})
export class FormModule { }
