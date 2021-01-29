import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';

 
import { MaterialModule } from 'projects/sidenav4/src/app/material/material.module';
import { FormsimplesComponent } from './formsimples/formsimples.component';
import { BasicoComponent } from './basico/app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RotasModule } from './router/rotas.module';
import { UserAddComponent } from './user/add/user-add.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MaterialModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    RotasModule,
    RxReactiveFormsModule
  ],

  declarations: [ 
    BasicoComponent, 
    FormsimplesComponent, 
    SidenavComponent,
    UserAddComponent ],

  bootstrap:    [ SidenavComponent ]
})
export class AppModule { }
