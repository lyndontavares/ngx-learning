import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  empList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.empList = db.list('EMP');

}
  getDataList(): Observable<any[]> {
    return this.empList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
  }
  getDataByID(id): Observable<any> {
    return this.db.object('EMP/' + id).snapshotChanges().map(res => {
    return res.payload.val();
    });
  }
  removeData(id): void {
    this.empList.remove(id);
  }
  addData(data) {
    return this.empList.push(data);
  }
  editData(id, data) {
    return this.empList.update(id, data);
  }
}