# Angular 7

## Rotas

```
cd app0
ng g m rotas --module=app --flat=true
```

## app.component.html
```html
<h1>App Vendas</h1>
<nav>
  <a routerLink="/catalogo">Catálogo</a> |
  <a routerLink="/vendedor">Vendedor</a> |
  <a routerLink="/pedido">Pedido</a>
</nav>
<router-outlet></router-outlet>
```

## rotas.module.ts
```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'pedido', component: PedidoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RotasModule { }
```
