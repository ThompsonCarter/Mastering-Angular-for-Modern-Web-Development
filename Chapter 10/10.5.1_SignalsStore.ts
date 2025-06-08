import { signal, computed } from '@angular/core';
import { Injectable } from '@angular/core';

export interface CartItem { id: string; name: string; quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartStore {
  private items = signal<CartItem[]>([]);
  items$ = computed(() => this.items());

  addItem(item: CartItem) {
    this.items.update(current => [...current, item]);
  }

  removeItem(id: string) {
    this.items.update(current => current.filter(i => i.id !== id));
  }
}
