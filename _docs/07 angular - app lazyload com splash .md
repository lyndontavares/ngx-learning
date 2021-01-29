## Criando app lazyload com splash

Para começar, vamos criar uma aplicação com rotas:

```
ng new app-lazyloading --routing
cd app-lazyloading
```

> confirme criar rotas!

## Criando os módulos
Vamos criar abaixo 3 módulos:

```
Home: ng g m modules/home --routing 
About: ng g m modules/about --routing 
Contact: ng g m modules/contact --routing
```

## Criando componentes para cada módulo

```
ng g c modules/home 
ng g c modules/about 
ng g c modules/contact
```

## Rotas (app-routing.module.ts)

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## home-routing.module.ts

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
```

> Faça o mesmo para  About e Contact

## Colocando Splash

Mesmo quando recorremos ao “lazyload”, é comum que algum módulo fique com um tamanho (KB) o suficiente para que o browser demore alguns segundinhos para baixa-lo. E mesmo que isso demore 1 segundo, devemos tratar isto informando algo na tela dizendo ao usuário que aguarde um momento.

No componente principal do sistema, o app.component.ts, você precisará injetar no seu construtor o private router: Router e também criar uma propriedade public routeLoading: boolean = false; no mesmo componente, para que seja possível registrar quando começou e terminou de baixar o conteúdo da rota.

```javascript
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routeLoading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) 
      {
          this.routeLoading = false;
      }
    });
  }
}
```

## Criando menu (app.component.html)

Assim como no código TypeScript, também teremos que modificar no Html do componente, para que a mensagem seja exibida para o usuário quando nossa propriedade “loadingRoute” for verdadeira.

```html

<ul>
  <li>
    <a routerLink="/home">Home</a>
  </li>
  <li>
    <a routerLink="/about">About</a>
  </li>
  <li>
    <a routerLink="/contact">Contact</a>
  </li>
</ul>

<div class="content">
  <div *ngIf="routeLoading" class="loading">Aguarde...</div>
  <router-outlet *ngIf="!routeLoading"></router-outlet>
</div>

```

## Checando carregamento no browser

<p align="center">
    <img width="800" alt="" src="assets/lazy.gif">
</p>

