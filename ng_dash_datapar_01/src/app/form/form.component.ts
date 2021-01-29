import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = "Novo";

  user: { name: { first: string; last: string; }; email: string; nickname: string; address: { street: string; street2: string; city: string; state: string; postcode: string; }; };

  constructor() { }

  ngOnInit() {
    this.user = {
      name: {
        first: '',
        last: '',
      },
      email: '',
      nickname: '',
      address: {
         street: '',
         street2: '',
         city: '',
         state: '',
         postcode: '',
      }
    };
  }

}