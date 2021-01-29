# Angular 7.x

## Pré-requisiros

### nodejs
```
sudo apt update
sudo apt install nodejs
udo apt install npm
nodejs -v
```

### visual code
```
sudo apt update
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt install code
```

## Angular CLI

```
npm install -g @angular/cli
```

## Criando app

```
ng new app0
cd app0
ng s
```

## criando workspace para múltiplas apps

### Usando angular cli (angular.io/cli)

```
ng new workspace1 --create-application=false
cd workspace1
ng g app app1
ng g app app2
ng s --project=app1 --port=3100
ng s --project=app2 --port=3200
```

### Usando nrwl extensions (nrwl.io)

```
npm install -g @nrwl/schematics
create-nx-workspace workspace2
cd workspace2
ng g app app1
ng g app app2
ng s --project=app1 --port=4100
ng s --project=app2 --port=4200
```

## Build para produção

```
ng b app0
ng b app1
ng b app2
```

## componentes

### app sem workspace

```
ng g c catalogo
ng g c vendedor
ng g c pedido
```

### app com workspace

```
ng g c --project=app1 erp/financiero/movimientoFinaciero
ng g c --project=app2 erp/faturacion/movimientoFaturacion
```

> para não gerar teste adicione: --skipTests=true
> exemplo: ng g c catalogo --skipTests=true

## Módulos

```
cd app0
ng g m app-rotas --flat --module=app
```

> --flat : não cria subpasta
> --module: declara em AppModule

## Serviços

```
cd app0
ng g s servicos/cambio --skipTests=true
ng g s servicos/iva --skipTests=true
```

## Classes

```
cd app0
ng g class domain/catalogo 
ng g class  domain/vendedor
ng g class  domain/pedido

ex:

export class Vendedor {
  id: number;
  nome: string;
  email: string;
}
```

## Documentação

```
npm install -g @compodoc/compodoc (global)
npm install --save-dev @compodoc/compodoc (local)
```

### Adicione ao package.json

```
"scripts": {
  "compodoc": "npx compodoc -p src/tsconfig.app.json"
}
```

### command line

```
npm run compodoc
```

## Webpack Bundle Analyzer (Análise webpack)

```
cd app0
npm i webpack-bundle-analyzer 
ng build --aot --stats-json
webpack-bundle-analyzer ./dist/app0/stats.json -p 7777
```

## Angular Material (https://material.angular.io)

```
ng add @angular/material
```

## Schematics (material.angular.io/guide/schematics)

```
cd app0

ng generate @angular/material:nav pages/dashboard --module=app 
ng generate @angular/material:address-form pages/agenda --module=app
```
