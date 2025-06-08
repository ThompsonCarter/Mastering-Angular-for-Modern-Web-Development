counter = signal(0);

increment() {
  this.counter.update(n => n + 1);
}