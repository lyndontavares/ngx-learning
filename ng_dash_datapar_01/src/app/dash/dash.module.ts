import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    DashRoutingModule
  ]
})
export class DashModule { }
