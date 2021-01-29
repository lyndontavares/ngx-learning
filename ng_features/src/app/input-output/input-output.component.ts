import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu: string;
  @Output() nomeClidado = new EventEmitter();

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(  this.activatedRoute);
  }

  enviarNome(value) {
    this.nomeClidado.emit(value);
  }
}
