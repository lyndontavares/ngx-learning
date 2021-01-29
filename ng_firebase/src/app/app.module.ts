import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { FirebaseConfig } from './../environments/firebase.config';

import { AngularFireModule } from 'angularfire2/index';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
