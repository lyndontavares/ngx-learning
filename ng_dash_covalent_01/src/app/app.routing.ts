import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ConsoleComponent } from './console/console.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: ConsoleComponent, pathMatch: 'full' },
  { path: 'console', component: ConsoleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: 'console' }
];

export const routing = RouterModule.forRoot(appRoutes);
