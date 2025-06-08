ngOnInit() {
  console.log('Card initialized with title:', this.title);
}

ngOnChanges(changes: SimpleChanges) {
  if (changes['highlighted']) {
    console.log('Highlight changed:', changes['highlighted'].currentValue);
  }
}

ngOnDestroy() {
  console.log('Card is being destroyed');
}
