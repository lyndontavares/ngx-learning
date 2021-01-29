# Integrando UIKit ao Angular
UIKit é um framework css. https://getuikit.com/

## Instalando uikit e jQuery

```
npm i uikit
npm i jquery
```

## Instalando plugin filterizr

Aplica filtro sobre galerias de imagens com trsições CSS. http://yiotis.net/filterizr/

```
npm i filterizr
```

## Adicione os types em tsconfig.json

```
  "types":[
    "jquery",
    "filterizr"
  ]
```

## Adicone scripts em angular.json

```
  "scripts": [
    "node_modules/jquery/dist/jquery.js",
    "node_modules/filterizr/dist/jquery.filterizr.min.js",
    "node_modules/uikit/dist/js/uikit.min.js",
    "node_modules/uikit/dist/js/uikit-icons.min.js"
```

## Utilizando UIKit

```javascript
import { Component, OnInit } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }

}
```

```html
<div (click)="showAlert()">alert UIKit</div>
```


## Utilizando jquery e plugin filterizr

Exemplo de utilização:

```javascript
  import { Component, OnInit, ElementRef, AfterViewInit, NgZone } from '@angular/core';
  declare var jQuery: any;

  @Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
  })
  export class AboutComponent implements OnInit, AfterViewInit {
    elementRef: ElementRef;

    constructor( elementRef: ElementRef, private zone: NgZone) {
        this.elementRef = elementRef;
    }

    ngAfterViewInit(): void {
      this.filtrar();
    }

    ngOnInit() {
    }

    onClick() {
      this.filtrar();
    }

    filtrar() {
      this.zone.runOutsideAngular(() => {
        jQuery('.filtr-container').filterizr();
      });
    }

  }
```




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
