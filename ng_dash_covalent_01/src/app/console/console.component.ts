import {Component, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService, TdDigitsPipe  } from '@covalent/core';

import { DatePipe } from '@angular/common';
import { single, multi } from './../data';

export enum OrderBy {
  ASC = <any>'asc',
  DESC = <any>'desc',
}

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent  {
  
  name = "Manage List";
  
  miniNav: boolean = false;
  
  data: Object[] = [{
      'created_at': '2015-11-04T19:00:31Z',
      'name': 'Change data capture for sales DB',
      'owner': 'Kyle',
      'updated_at': '2016-11-08T19:00:31Z',
    }, {
      'created_at': '2015-11-08T19:00:31Z',
      'name': 'Change data capture for MF DB',
      'owner': 'Richa',
      'updated_at': '2016-11-09T19:00:31Z',
    }, {
      'created_at': '2015-12-11T19:00:31Z',
      'name': 'Our Data Lake',
      'owner': 'Ed',
      'updated_at': '2016-12-07T19:00:31Z',
    }, {
      'created_at': '2015-11-05T19:00:31Z',
      'name': 'Nightly batched analytics',
      'owner': 'Ilsun',
      'updated_at': '2016-11-07T19:00:31Z',
    }, {
      'created_at': '2015-12-12T19:00:31Z',
      'name': 'Long term data storage',
      'owner': 'Jeremy',
      'updated_at': '2016-12-08T19:00:31Z',
    }, {
      'created_at': '2015-12-15T19:00:31Z',
      'name': 'On the fly analytics',
      'owner': 'Jenn',
      'updated_at': '2016-12-09T19:00:31Z',
    } ];

  columnOptions: any[] = [{
    name: 'Updated',
    value: 'updated_at',
  }, {
    name: 'Created',
    value: 'created_at',
  }];
  sortKey: string = this.columnOptions[0].value;
  headers = {};
  pageSize: number = 5;
  example1: boolean = true;

  ngOnInit(): void {
    this.columnOptions.forEach((option: any) => {
      this.headers[option.value] = OrderBy.ASC;
    });
  }

  isASC(sortKey: string): boolean {
    return this.headers[sortKey] === OrderBy.ASC;
  }

  sortBy(sortKey: string): void {
    if (this.headers[sortKey] === OrderBy.ASC) {
      this.headers[sortKey] = OrderBy.DESC;
    } else {
      this.headers[sortKey] = OrderBy.ASC;
    }
    this.data = this.data.sort((rowA: Object, rowB: Object) => {
      let cellA: string = rowA[sortKey];
      let cellB: string = rowB[sortKey];
      let sort: number = 0;
      if (cellA < cellB) {
        sort = -1;
      } else if (cellA > cellB) {
        sort = 1;
      }
      return sort * (this.headers[sortKey] === OrderBy.DESC ? -1 : 1);
    });
  }

  search(): void {
    // dummy func
  }

  single: any[];
  multi: any[];

  routes: Object[] = [{
      icon: 'dashboard',
      route: '.',
      title: 'Dashboard',
    }, {
      icon: 'library_books',
      route: '.',
      title: 'Documentation',
    }, {
      icon: 'build',
      route: '.',
      title: 'Console',
    }
  ];
  mgmtmenu: Object[] = [{
      icon: 'people',
      route: '.',
      title: 'Users',
      description: 'Item description',
    }, {
      icon: 'dns',
      route: '.',
      title: 'Systems',
      description: 'Item description',
    }
  ];
  monitormenu: Object[] = [{
      icon: 'verified_user',
      route: '.',
      title: 'Audit Logs',
      description: 'Item description',
    }, {
      icon: 'settings_system_daydream',
      route: '.',
      title: 'Monitored Systems',
      description: 'Item description',
    }
  ];
  settingsmenu: Object[] = [{
      icon: 'lock',
      route: '.',
      title: 'Authentication',
      description: 'Item description',
    }, {
      icon: 'email',
      route: '.',
      title: 'SMTP Settings',
      description: 'Item description',
    }
  ];

  constructor(public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
              Object.assign(this, { single, multi })
  }


  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
    setTimeout(() => {
      // this.manageList.sidenav._animationStarted.emit()
    });
  }

}