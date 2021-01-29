import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  troca: boolean = true;
  tecnologias: string [] = ['Angular 2', 'Angular 4', 'javaScript', 'html', 'CSS'];


  constructor() { }

  ngOnInit() {
  }

  mudar() {
    this.troca = !this.troca;
  }

}
