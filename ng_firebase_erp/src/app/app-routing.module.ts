import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { LeaveComponent } from './leave/leave.component';
import { ProjectComponent } from './project/project.component';
import { DocumentComponent } from './document/document.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'addEmp', component: AddEmployeeComponent },
  { path: 'empList', component: EmployeeListComponent },
  { path: 'timesheet', component: TimeSheetComponent },
  { path: 'doc', component:  DocumentComponent},
  { path: 'leave', component: LeaveComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'editEmp/:id', component: AddEmployeeComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
