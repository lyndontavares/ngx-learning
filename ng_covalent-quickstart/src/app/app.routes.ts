import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, }, 
  { path: '', component: LoginComponent,  pathMatch:'full'}, 
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dash', component: DashboardComponent,  }, 
      { path: '', loadChildren: './users/users.module#UsersModule',
      },
    ],
  },
];

export const appRoutes: any = RouterModule.forRoot(routes);
