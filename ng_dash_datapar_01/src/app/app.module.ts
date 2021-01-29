import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material/material.module';
import { CovalentModule } from './shared/covalent/covalent.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    /** Material Modules */
    MaterialModule,
    /** Covalent Modules */
    CovalentModule,
    routing
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
 
}