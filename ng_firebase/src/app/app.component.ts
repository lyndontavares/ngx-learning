import { AngularFireDatabase  } from 'angularfire2/database';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { auth } from 'firebase';
import { Menu } from './menu';
import { MenuService } from './menu.service';
import { map } from 'rxjs/operators';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  menus: Array<Menu>;
  menu: Menu = new Menu();

  constructor(
    private menuService: MenuService,
    private db: AngularFireDatabase,
    private store: AngularFirestore,
    private fire: AngularFireAuth) {
    this.menuListAll();
  }

  login() {
    this.fire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fire.auth.signOut();
  }


  menuAdd(): void {
    this.menu = new Menu();
  }

  menuSave() {
    this.menuService.createCustomer(this.menu);
    this.menu = new Menu();
  }

  onSubmit() {
    this.menuSave();
  }

  menuListAll2 () {
    this.db.list<Menu>('menu')
      .valueChanges()
      .subscribe( (data) => {
          this.menus = data;
       });
  }
  menuListAll() {
    // Use snapshotChanges().map() to store the key
    this.menuService.getCustomersList()
      .snapshotChanges()
      .pipe( map( changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe( data => {
      this.menus = data;
    });
  }

  menuDeleteAll() {
    this.menuService.deleteAll();
  }

  menuUpdate( m: Menu) {
    this.menuService.updateCustomer(m.key, m );
  }

  menuUpdateActive(isActive: boolean) {
    this.menuService.updateCustomer(this.menu.key, { active: isActive });
  }

  menuDelete() {
    this.menuService.deleteCustomer(this.menu.key);
  }

}

