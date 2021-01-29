# Angular Template
Uma parte importante do componente é o template, que define como ele será desenhado na
aplicação. Um template possui código HTML, diretivas, chamada a eventos e também outros
templates.

```html
<h1 class="jumbotron">
    {{title}}
</h1>

<video-list 
    [videos]="videos"
    (selectVideo)="onSelectVideo($event)">
</video-list>

<video-detail
    *ngIf="selectedVideo"
    [video]="selectedVideo"
    (closeForm)="onCloseDetailForm($event)"
>
</video-detail>

<button type="button"
    class="btn btn-default"
    (click)="newVideo()">New</button>
```

## Interpolation (Uso de {{ }})
O {{title}} é um databind do template. Ele vai usar o valor da variável title da classe no
template. Pode-se usar este databind em tags e atributos html, como no exemplo a seguir:

```html
<h3>
{{title}}
<img src="{{heroImageUrl}}" style="height:{{App.Style.Height}}">
</h3>
``` 

## Template Expressions
Além de inserir valores, expressões podem ser usadas para se obter os mais diversos
resultados. Pode-se usar {{1+1}} para se obter o valor 2, por exemplo. Ou então pode-se
usar {{{meuarray.length}} para obter a quantidades de itens de um array.

## Property Bind
Uma propriedade no componente pode ser ligada a um evento ou método do componente.
Vamos voltar a este exemplo específico:

```html
<video-detail
*ngIf="selectedVideo"
[video]="selectedVideo"
(closeForm)="onCloseDetailForm($event)"
>
</video-detail>
```

Aqui temos três exemplos de property bind que podem ser usados para três situações
diferentes:

* O uso o *ngIf irá determinar se o componente estará presente ou não na aplicação.
O uso do asterisco * indica ao Angular que esta propriedade pode alterar a DOM da
página. Isso vai alterar a forma como o Angular trata este componente, para que ele
seja otimizado.

* O uso do [video]=selectedVideo indica que o valor de selectedVideo será repassado
para a variável video do VideoDetailComponent.

* Já (closeForm)="onCloseDetailForm($event)" indica um evento que ocorrerá no
componente VideoDetailComponent e que executará o método onCloseDetailForm.
A propriedade $event deverá estar sempre presente.
Além destes temos outro chamado de TwoWay DataBind, que é indicado através de
[(target)], como no exemplo a seguir:

```html
<input type="input"
[(ngModel)]="video.title">
``` 

## Laços
Outro template expression que merece destaque são os laços, no qual usamos a diretiva
*ngFor. Perceba o uso do asterisco novamente indicando que esta diretiva altera a DOM
da aplicação. A diretiva deve ser inserida no elemento que irá se repetir. No exemplo do
capítulo anterior, usamos:

```html
<table class="table table-hover">
<thead>
<tr>
<th>ID</th>
<th>Title</th>
</tr>
</thead>
<tbody>
<tr *ngFor="#v of videos" (click)="onSelect(v)">
<td>{{v.id}}</td>
<td>{{v.title}}</td>
</tr>
</tbody>
</table>
```

## Template - Pipes
Um pipe adiciona uma transformação na expressão. O exemplo a seguir ilustra este comportamento:

```html
<div>{{ title | uppercase }}</div>
Pode-se inclusive formatar uma variável com json, por exemplo:
<div>{{currentHero | json}}</div>
```

A saída seria:

```json
{ "firstName": "Hercules",
"lastName": "Son of Zeus",
"birthdate": "1970-02-25T08:00:00.000Z",
"url": "http://www.imdb.com/title/tt0065832/",
"rate": 325, "id": 1 }
```

Para formatar uma data, usa-se {{ birthday | date:"MM/dd/yy" }} onde birthday é um objeto do tipo Date.

## Referência
https://angular.io/guide/pipes
