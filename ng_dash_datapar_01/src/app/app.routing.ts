import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' , pathMatch: 'full' },
  { path: 'dash', loadChildren: './dash/dash.module#DashModule' },
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', loadChildren: './login/login.module#LoginModule' }
];

export const routing = RouterModule.forRoot(appRoutes);
