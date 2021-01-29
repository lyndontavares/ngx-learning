import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { NetoComponent } from './neto.component';
import { DataService } from "./data.service";

@Component({
  selector: 'app-filho',
  template: `
      comp filho: {{ message }} <br>
      comp filho: {{childMessage}} <br>
      comp filho: dataServiceMessage: {{dataServiceMessage}}
      <button (click)="sendMessage()">Send Message</button>
      <button (click)="clearMessage()">Clear Message</button>
      <br> <br>

      <app-neto [netoMessage]="childMessage"></app-neto>
  `
})
export class FilhoComponent implements OnInit, AfterViewInit {

  @Output() messageEvent = new EventEmitter<string>();
  @ViewChild(NetoComponent) neto;
  @Input() childMessage: string;

  dataServiceMessage = '';
  message = 'mensagem do filho';
  netoMessage: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.dataServiceMessage = message);
  }

  ngAfterViewInit ()
  {
    this.netoMessage = this.neto.message;
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  clearMessage()
  {
    this.messageEvent.emit(null);
  }
}
