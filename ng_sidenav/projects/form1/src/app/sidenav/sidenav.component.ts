import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}


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
