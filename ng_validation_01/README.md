# Angular 7 - validations

## Ngvalidation
https://github.com/rxweb/rxweb/tree/master/packages/reactive-form-validators

### Importar módulos

Para trabalhar no formulário, é necessário importar módulos angulares ( FormsModulee ReactiveFormsModule) e também importar, o RxReactiveFormsModuleque fornece recursos de validação de nível avançado / dinâmico. Todos os três módulos se registram na propriedade NgModuledecorator imports.

```javascript
import { BrowserModule } de  '@angular/platform-browser ' ;
import { NgModule } de  '@angular/core' ;

import { FormsModule , ReactiveFormsModule } de  '@angular/forms' ; // <- Importação do módulo de 
importação # 1 { RxReactiveFormsModule } de  '@rxweb/reactive-form-validators' ; // <- # 2 module import

import { AppComponent } de  './app.component' ;

@ NgModule ({
  declarações : [AppComponent],
  importações : [BrowserModule,
	FormsModule,
	ReactiveFormsModule, 
	RxReactiveFormsModule
	] 
  provedores : [],
  bootstrap : [AppComponent]
})
 classe de  exportação AppModule {}
 ```

## class-validator
https://github.com/typestack/class-validator

### Instalação

```
npm install class-validator --save
```
### Uso

```javascript
import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

export class Post {

    @Length(10, 20)
    title: string;

    @Contains("hello")
    text: string;

    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;

    @IsEmail()
    email: string;

    @IsFQDN()
    site: string;

    @IsDate()
    createDate: Date;

}

let post = new Post();
post.title = "Hello"; // should not pass
post.text = "this is a great post about hell world"; // should not pass
post.rating = 11; // should not pass
post.email = "google.com"; // should not pass
post.site = "googlecom"; // should not pass

validate(post).then(errors => { // errors is an array of validation errors
    if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
    } else {
        console.log("validation succeed");
    }
});
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

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
