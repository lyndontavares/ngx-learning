import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '../services/auth.service';
import { NotificationsService } from '../services/notifications.service';

import { Expense } from '@app/expenses/expense.interface';

@Injectable()
export class ExpensesService {

  selectedExpense: Expense;

  expensesCollection: AngularFirestoreCollection<Expense>;
  expenses$: Observable<Expense[]>;
  expenses: Expense[];

  constructor(private db: AngularFirestore, private authService: AuthService, private notifService: NotificationsService) {

    this.expensesCollection = this.db.collection('/users').doc(this.authService.user.uid).collection('/expenses');

    this.expenses$ = this.expensesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data  = a.payload.doc.data() as Expense;
          data.id = a.payload.doc.id;
          return data;
        })
      }),
      catchError(err => observableOf(null))
    )
  }

  getExpenses$() {
    return this.expenses$;
  }

}
