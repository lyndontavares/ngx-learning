import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatListModule, MatToolbarModule,MatTableModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {DbService} from './db.service';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})  

  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
