import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';
import { addItem, removeItem, loadCart, loadCartSuccess } from './cart.actions';

export interface CartState {
  items: CartItem[];
  loading: boolean;
}

export const initialState: CartState = { items: [], loading: false };

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(removeItem, (state, { id }) => ({ ...state, items: state.items.filter(i => i.id !== id) })),
  on(loadCart, state => ({ ...state, loading: true })),
  on(loadCartSuccess, (state, { items }) => ({ ...state, items, loading: false }))
);
