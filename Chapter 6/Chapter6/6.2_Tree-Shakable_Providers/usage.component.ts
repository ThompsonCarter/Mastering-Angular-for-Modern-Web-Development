import { Component } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-usage',
  template: '<p>Using OrderService</p>'
})
export class UsageComponent {
  constructor(private orderService: OrderService) {}
}
