import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PaiComponent } from './pai.component';
import { FilhoComponent } from './filho.component';
import { NetoComponent } from './neto.component';

@NgModule({
  declarations: [
    PaiComponent,
    FilhoComponent,
    NetoComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [PaiComponent]
})
export class AppModule { }
