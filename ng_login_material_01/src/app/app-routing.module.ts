import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'not', component: PageNotFoundComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'not' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
