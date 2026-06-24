import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInoutNumber]',
})
export class InoutNumber {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  @HostListener('focus')
  onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
  }
  @HostListener('blur')
  onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid gray');
  }
}
