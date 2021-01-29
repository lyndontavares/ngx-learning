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



    //  $('.filtr-container').filterizr({ });
    // $('.filtr-container').filterizr('setOptions', {layout: 'sameSize'});
    // ou assim
    // jQuery(this.elementRef.nativeElement).draggable({containment:'#draggable-parent'});
    // $(document).ready(function() {
    //  $('.filtr-container').filterizr('setOptions', {layout: 'sameSize'});
    // });
    // jQuery( this.elementRef. )
    // jQuery(this.elementRef.nativeElement)$('.filtr-container').filterizr('setOptions', {layout: 'sameSize'});


/*
EXEMPLO 1
import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  public ngOnInit()
  {
    $(document).ready(function(){
        $("button").click(function(){
            var div = $("div");
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '5em'}, "slow");
        });
    });
  }
} */


/*
EXEXMPLO 2

es you can use jquery with Angular 4

Steps:

1) In index.html put below line in tag.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

2) In component ts file below you have to declare var like this

import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abgular 4 with jquery';
  toggleTitle(){
    $('.title').slideToggle(); //
  }

}
And use this code for corresponding html file like this:

<h1 class="title" style="display:none">
  {{title}}
</h1>
<button (click)="toggleTitle()"> clickhere</button>
This will work for you. Thanks

 */


 //; https://www.fusioncharts.com/blog/comparing-jquery-grid-plugins-masonry-vs-isotope-vs-packery-vs-gridster-vs-shapeshift-vs-shuffle-js/


