import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	MatButtonModule,
	MatDialogModule,
	MatToolbarModule, 
	MatMenuModule,
	MatInputModule, 
	MatProgressSpinnerModule, 
	MatCardModule, 
	MatCheckboxModule,
	MatIconModule,
	MatDatepickerModule,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
	DateAdapter,
	MatListModule,
	MatPaginatorModule, 
	MatRadioModule, 
	MatRippleModule, 
	MatSelectModule, 
	MatSidenavModule, 
	MatSnackBarModule, 
	MatSortModule,
	MatStepperModule,
	MatTabsModule, 
	MatTooltipModule 
} from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({

	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatMenuModule, 
		MatInputModule, 
		MatProgressSpinnerModule, 
		MatBadgeModule,
		MatCardModule, 
		MatCheckboxModule, 
		MatIconModule, 
		MatDatepickerModule,
		MatListModule, 
		MatPaginatorModule, 
		MatRadioModule, 
		MatRippleModule, 
		MatSelectModule, 
		MatSidenavModule, 
		MatSnackBarModule, 
		MatSortModule,
		MatStepperModule,
		MatTableModule, 
		MatTabsModule, 
		MatTooltipModule,
		MatMomentDateModule
	],

	exports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatMenuModule, 
		MatInputModule, 
		MatProgressSpinnerModule, 
		MatBadgeModule,
		MatCardModule, 
		MatCheckboxModule, 
		MatIconModule, 
		MatDatepickerModule,
		MatListModule, 
		MatPaginatorModule, 
		MatRadioModule, 
		MatRippleModule, 
		MatSelectModule, 
		MatSidenavModule, 
		MatSnackBarModule, 
		MatSortModule,
		MatStepperModule,
		MatTableModule, 
		MatTabsModule, 
		MatTooltipModule,
		MatMomentDateModule
	],

	declarations: [

	],

	providers: [
		{
			provide: MAT_DATE_LOCALE,
			useValue: 'en-GB'
		}
	]
})

export class MaterialModule {

}