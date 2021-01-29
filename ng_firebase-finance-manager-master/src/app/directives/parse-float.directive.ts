import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appParseFloat]'
})

export class ParseFloatDirective {

  element: any;

  constructor(private elementRef: ElementRef, renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.element.value = parseFloat(this.element.value).toFixed(2);
  }

}