import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MyMaterialModule} from './material.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {MyTableComponent} from './my-table/my-table.component';
import {RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {ThirdPageComponent} from './third-page/third-page.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {MenuService} from './first-page/menu.service';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

const appRoutes: Routes = [
  {path: 'first-page', component: FirstPageComponent},
  {path: 'second-page', component: SecondPageComponent},
  {path: 'third-page', component: ThirdPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MyMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
