import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FilhoComponent } from './filho.component';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  template: `
    comp pai: {{paiMessage}} <br>
    comp pai: {{filhoMessage}} <br>
    comp pai: {{netoMessage}} <br>
    comp pai: {{filhoMessageEventEmitter}} <br>
    comp pai: dataServiceMessage: {{dataServiceMessage}}
    <button (click)="newMessage()">New Message</button> <br><br>

    <app-filho
      [childMessage]="paiMessage"
      (messageEvent)="receiveMessage($event)"
    ></app-filho>
  `,
})
export class PaiComponent implements AfterViewInit, OnInit  {

  messageCount = 0;
  dataServiceMessage: string;
  paiMessage = 'mensagem do pai';
  filhoMessage =  '';
  netoMessage = '';
  filhoMessageEventEmitter = '';
  @ViewChild(FilhoComponent) filho;

  constructor(private data: DataService) { }

  ngAfterViewInit() {
    this.filhoMessage = this.filho.message;
    this.netoMessage = this.filho.netoMessage;
  }

  receiveMessage($event) {
    this.filhoMessageEventEmitter = $event;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.dataServiceMessage = message);
  }

  newMessage() {
    this.messageCount++;
    this.data.changeMessage('mensagem via dataService(' + this.messageCount + ') ');
  }

}
