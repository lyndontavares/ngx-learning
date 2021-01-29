import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-neto',
  template: `
      comp neto: {{ netoMessage }} <br>
      comp neto: {{ message }}
  `
})
export class NetoComponent implements OnInit {

  @Input() netoMessage: string;

  message = 'mensagem do neto';

  constructor() { }

  ngOnInit() {
  }

}
