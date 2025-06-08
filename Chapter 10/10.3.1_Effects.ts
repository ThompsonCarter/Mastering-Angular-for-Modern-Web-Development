import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { loadCart, loadCartSuccess, addItem, addItemSuccess } from './cart.actions';
import { CartService } from '../services/cart.service';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      switchMap(() => this.cartService.fetchCart().pipe(
        map(items => loadCartSuccess({ items }))
      ))
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      switchMap(({ item }) =>
        this.cartService.addItem(item).pipe(
          map(savedItem => addItemSuccess({ item: savedItem }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
