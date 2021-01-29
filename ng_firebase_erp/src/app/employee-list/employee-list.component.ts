import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  myImage = './assets/logo.svg';
  emp: any[];

  constructor(private firebaseService: FirebaseService, private router: Router) {

  }
  ngOnInit() {
  this.firebaseService.getDataList().subscribe(items => { this.emp = items;
  });
}
  delEmp(data){
    this.firebaseService.removeData(data.key);
  }
  editEmp(data){
  this.router.navigate([`/editEmp/${data.key}`]);
  }
  addEmp() {
  this.router.navigate([`/addEmp`]);
  }

}
