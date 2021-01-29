import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ProfileComponent } from './profile/profile.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { LeaveComponent } from './leave/leave.component';
import { ProjectComponent } from './project/project.component';
import { DocumentComponent } from './document/document.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FirebaseService } from './service/firebase-service.service';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddEmployeeComponent,
    TimeSheetComponent,
    LeaveComponent,
    ProjectComponent,
    DocumentComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})


export class AppModule { }
