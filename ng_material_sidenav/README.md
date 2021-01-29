# Sidenav @angular/material

## Side Nav Material Design con Angular 6
Crea Side Nav con [angular 6](https://angular.io/) y [@angular/materia](https://material.angular.io/)  de forma fácil, rápido y sencillo.

## 1: Crear proyecto con Angular CLI
El primer paso es crear su proyecto angular, utilizanAdo Angular CLI. Usaremos el siguiente comando:
`ng new sidenav-angular6`

 ##  Navegar al proyecto
`cd sidenav-angular6`

##  Iniciar serve
  `ng serve --open`

## 2: Agregar angular material

`npm install --save @angular/material @angular/cdk`

Tambien se puede utilizar ng add
`ng add --save @angular/material @angular/cdk`

## 3: crear componente  angular material
`ng generate component side-nav`

## 4: Add Material Icons (OJO: en el index.html)
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

## 5: Para Mobile responsive instalamos @angular/flex-layout (opcional)
`npm install --save @angular/flex-layout`

## 6: Add helper-css (opcional)
[Helper-css](https://github.com/armandoaepp/helper-css)


# info angular 6
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
