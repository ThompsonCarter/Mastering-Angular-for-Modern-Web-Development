import { createAction, props } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export const addItem = createAction('[Cart] Add Item', props<{ item: CartItem }>());
export const removeItem = createAction('[Cart] Remove Item', props<{ id: string }>());
export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ items: CartItem[] }>());
