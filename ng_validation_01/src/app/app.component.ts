import { Component,OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit() {
    ReactiveFormConfig.set({
      'validationMessage': {
      'required':  'Campo requerido',
      'minLength': 'tamanho mínimo: {{1}}',
      'maxLength': 'tamnanho máximo: {{1}}',
      'compare': 'não passou na comparação',
      'specialCharacter' : 'carateres não permitido(s)',
      'alpha': 'somente caracteres alfabáticos'
      }
  });
  }
}
