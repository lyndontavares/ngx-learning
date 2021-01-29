import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';

const routes: Routes = [
  {path: '', component: FirstComponent, pathMatch: 'full'},
  {path: 'material-design', component: FirstComponent},
  {path: 'what-up-web', component: SecondComponent},
  {path: 'my-ally-cli', component: ThirdComponent},
  {path: 'become-angular-tailer', component: FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
