import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() products: { name: string }[] = [];
  page = 1;
  pageSize = 5;

  get totalPages(): number {
    return Math.ceil(this.products.length / this.pageSize);
  }

  get pagedProducts() {
    const start = (this.page - 1) * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  prevPage() { this.page = Math.max(this.page - 1, 1); }
  nextPage() { this.page = Math.min(this.page + 1, this.totalPages); }
}
