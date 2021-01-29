import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appParseInt]'
})

export class ParseIntDirective {

  element: any;

  constructor(private elementRef: ElementRef, renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.element.value = parseInt(this.element.value)
  }

}