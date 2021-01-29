import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from '../user/add/user-add.component';
import { BasicoComponent } from '../basico/app.component';
 import { FormsimplesComponent } from '../formsimples/formsimples.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'basico', component: BasicoComponent },
  { path: 'simples',      component: FormsimplesComponent },
  { path: 'user',      component: UserAddComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ]
})
export class RotasModule { }
