import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-order-counter',
  standalone: true,
  templateUrl: './order-counter.component.html'
})
export class OrderCounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(n => n + 1);
  }
}