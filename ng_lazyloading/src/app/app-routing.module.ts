import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }