import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  name = "Manage List";
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

  constructor() { }

  ngOnInit() {
  }

}
