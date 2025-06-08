import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

const selectCartFeature = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(selectCartFeature, state => state.items);
export const selectCartLoading = createSelector(selectCartFeature, state => state.loading);
