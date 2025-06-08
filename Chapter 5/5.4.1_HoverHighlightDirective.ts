import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appHoverHighlight]', standalone: true })
export class HoverHighlightDirective {
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'lightyellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '';
  }
}