import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Menu } from '../models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private dbPath = '/menu';

  entity: AngularFireList<Menu> = null;

  constructor(private db: AngularFireDatabase) {
    this.entity = db.list(this.dbPath);
  }

  createCustomer(menu: Menu): void {
    this.entity.push(menu);
  }

  updateCustomer(key: string, value: any): void {
    this.entity.update(key, value).catch(error => this.handleError(error));
  }

  deleteCustomer(key: string): void {
    this.entity.remove(key).catch(error => this.handleError(error));
  }

  getCustomersList(): AngularFireList<Menu> {
    return this.entity;
  }

  deleteAll(): void {
    this.entity.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
