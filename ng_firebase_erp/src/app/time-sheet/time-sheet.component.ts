import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {
  myImage = './assets/logo.svg';
  constructor() { }
  n =0;
  ngOnInit() {
  }
  count(){
    this.n++;
  }
}
