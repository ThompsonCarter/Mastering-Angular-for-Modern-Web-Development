import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface Order { id: string; name: string; }
export interface OrderState { items: Order[]; }

@StoreConfig({ name: 'orders' })
@Injectable({ providedIn: 'root' })
export class OrderStore extends EntityStore<OrderState, Order> {
  constructor() {
    super({ items: [] });
  }
}
