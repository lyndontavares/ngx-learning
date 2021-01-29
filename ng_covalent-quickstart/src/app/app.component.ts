import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'qs-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/datapar2.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'datapar',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/datapar.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'datapar2',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/datapar2.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
  }

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
