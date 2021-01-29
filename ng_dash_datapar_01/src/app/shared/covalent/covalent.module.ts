import {NgModule} from '@angular/core';

import { 
  CovalentCommonModule, 
  CovalentLayoutModule, 
  CovalentMediaModule, 
  CovalentExpansionPanelModule,
  CovalentStepsModule, 
  CovalentLoadingModule, 
  CovalentDialogsModule, 
  CovalentSearchModule, 
  CovalentPagingModule,
  CovalentNotificationsModule, 
  CovalentMenuModule, 
  CovalentDataTableModule, 
  CovalentMessageModule, 
  CovalentFileModule 
} from '@covalent/core';

@NgModule({
imports: [
  CovalentCommonModule, 
  CovalentLayoutModule, 
  CovalentMediaModule, 
  CovalentExpansionPanelModule,
  CovalentStepsModule, 
  CovalentLoadingModule, 
  CovalentDialogsModule, 
  CovalentSearchModule, 
  CovalentPagingModule,
  CovalentNotificationsModule, 
  CovalentMenuModule, 
  CovalentDataTableModule, 
  CovalentMessageModule, 
  CovalentFileModule 
],
exports: [
  CovalentCommonModule, 
  CovalentLayoutModule, 
  CovalentMediaModule, 
  CovalentExpansionPanelModule,
  CovalentStepsModule, 
  CovalentLoadingModule, 
  CovalentDialogsModule, 
  CovalentSearchModule, 
  CovalentPagingModule,
  CovalentNotificationsModule, 
  CovalentMenuModule, 
  CovalentDataTableModule, 
  CovalentMessageModule, 
  CovalentFileModule 
],
})

export class CovalentModule {
}