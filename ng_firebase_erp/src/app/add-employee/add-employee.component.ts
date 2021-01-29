import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { FirebaseService } from '../service/firebase-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  myImage = './assets/logo.svg';
  title: string ;
  id : string;
  emp : any ={};
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = 'Add Employee';
      if(this.id){
          this.title = 'Edit Employee Info';
          this.getEmp(this.id);
      }
  }
  addEmploy(data: NgForm){
    if(this.id){
      this.firebaseService.editData(this.id,data.value).then(this.goToPage);
      }else{
      this.firebaseService.addData(data.value).then(this.goToPage);
      }
      
  }
  getEmp(id){
    this.firebaseService.getDataByID(id).subscribe((data)=>{this.emp = data;
    });
    console.log(this.emp);
  }
  Cancel() {
  this.router.navigate([`/empList`]);
  }

  goToPage=()=>{
  this.router.navigate(['/empList']);
  }


}
