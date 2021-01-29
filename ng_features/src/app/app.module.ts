import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { AlertaService } from './alerta.service';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DiComponent } from './di/di.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AngularComponent } from './angular/angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    ListaPessoaComponent,
    NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    EventBindingComponent,
    InputOutputComponent,
    DiComponent,
    FormularioComponent,
    AngularComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AngularComponent },
      { path: 'angular', component: AngularComponent },
      { path: 'di', component: DiComponent },
      { path: 'event', component: EventBindingComponent },
      { path: 'form', component: FormularioComponent },
      { path: 'input', component: InputOutputComponent  },
      { path: 'inter', component: InterpolationBindingComponent },
      { path: 'lista', component: ListaPessoaComponent },
      { path: 'class', component: NgClassComponent },
      { path: 'for', component: NgForComponent },
      { path: 'if', component: NgIfComponent },
      { path: 'style', component: NgStyleComponent },
      { path: 'switch', component: NgSwitchCaseComponent },
      { path: 'property', component: PropertyBindingComponent },
      { path: 'twoway', component: TwoWayBindingComponent },
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
