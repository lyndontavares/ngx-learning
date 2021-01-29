import { Injectable } from '@angular/core';

import { of as observableOf,  Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { NotificationsService } from './notifications.service';

export interface TaxCode {
    id: string;
    name: string;
    rate: number;
}

@Injectable()
export class TaxCodesService {
    
    taxCodesCollection: AngularFirestoreCollection<TaxCode>;
    taxCodes$: Observable<TaxCode[]>;
    taxCodes: TaxCode[];
    selectedTaxCode: TaxCode;

    constructor(private db: AngularFirestore, private authService: AuthService, private notifService: NotificationsService) {
        this.taxCodesCollection = this.db.collection('/taxCodes');

        this.taxCodes$ = this.taxCodesCollection.snapshotChanges().pipe(
            map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    return data;
                })
            }),
            catchError(err => observableOf(null))
        )
    }

    getTaxCodes$() {
        return this.taxCodes$;
    }

    getSelectedTaxCode(selectedRate) {
        this.taxCodesCollection.ref.where('rate', '==', selectedRate).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                this.selectedTaxCode = documentSnapshot.data() as TaxCode;
                console.log('TaxCodesService.getSelectedTaxCode().selectedTaxCode:', this.selectedTaxCode);
            })
        })
        return this.selectedTaxCode;
    }

}
