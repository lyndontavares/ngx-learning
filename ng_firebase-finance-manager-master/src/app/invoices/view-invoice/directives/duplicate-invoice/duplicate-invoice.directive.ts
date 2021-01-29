import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDuplicateInvoice]'
})

export class DuplicateInvoiceDirective {

  element: any;

  constructor(private elementRef: ElementRef, renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('click', ['$event'])
  onClick(invoice) {
    console.log('duplicateInvoice()');
  }

}
