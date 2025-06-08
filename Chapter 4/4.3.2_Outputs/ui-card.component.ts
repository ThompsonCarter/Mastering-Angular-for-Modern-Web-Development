@Output() cardClick = new EventEmitter<void>();

onClick() {
  this.cardClick.emit();
}
