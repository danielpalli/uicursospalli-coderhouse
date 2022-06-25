import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAgrandarLetra]'
})
export class AgrandarLetraDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontSize = '20px';
  }

}
