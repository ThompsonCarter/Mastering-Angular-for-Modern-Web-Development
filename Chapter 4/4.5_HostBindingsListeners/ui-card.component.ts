@HostBinding('class.disabled')
@Input() disabled = false;

@HostListener('mouseenter') onMouseEnter() {
  this.highlighted = true;
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlighted = false;
}
