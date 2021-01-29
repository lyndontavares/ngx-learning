import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort, MatSnackBar} from '@angular/material';
import {Menu} from '../models/menu';
import {MenuService} from './menu.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  _menus: Array<Menu>;
  _menu: Menu = new Menu();

  loading = true;

  dataSource: MatTableDataSource<Menu>;

  displayedColumns = ['key', 'email', 'firstName', 'operations'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public snackBar: MatSnackBar,
              private menuService: MenuService
  ) {

  }

  deleteMenu(id) {
    const snackBarRef = this.snackBar.open(`Deletando Menu #${id}`);
  }

  editMenu(id) {
    const snackBarRef = this.snackBar.open(`Editando Menu #${id}`);

  }

  ngOnInit(): void {
    setTimeout(() => {

      this.loading = false;

    }, 2000);

    this.menuService.getCustomersList()
      .snapshotChanges()
      .pipe(map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      ).subscribe(data => {
      this._menus = data;
      this.dataSource = new MatTableDataSource<Menu>(this._menus);
      // console.log( data);
    });

    /*this.dataService.getCustomers(this.startIndex,this.endIndex).subscribe((d: Customer[])=>{

      this.dataSource.data = d;
      this.loading = false;

    });*/


  }
}
