import { Component, OnInit, HostListener, Inject, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [WindowService]
})
export class HeaderComponent implements OnInit {

  public navIsFixed: boolean;
  @ViewChild('navbar') navBarElement: ElementRef;
  public bgOpacity: number;
  navPos: number;
  public isCollapsed = true;
  constructor( @Inject(DOCUMENT) private document: Document, private render: Renderer2) {
    this.navIsFixed = false;
    this.bgOpacity = 0;
  }

  ngOnInit() {
    this.navPos = this.navBarElement.nativeElement.offsetTop;
  }

  toggle() {
    this.isCollapsed = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const opacity = (number * 200 / window.screen.height);
    this.bgOpacity = opacity < 100 ? opacity / 100 : 100;
    console.log(event);
    if (opacity > 0.5) {
      this.render.addClass(this.navBarElement.nativeElement, 'shadow');
    } else {
      this.render.removeClass(this.navBarElement.nativeElement, 'shadow');
    }



    console.log(this.bgOpacity);
    /*if (number > 500) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < this.navPos) {
      this.navIsFixed = false;
    }*/

  }

}
