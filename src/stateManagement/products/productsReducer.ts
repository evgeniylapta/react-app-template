import { createReducer } from '@reduxjs/toolkit'
import Product from '../../models/products/Product'
import { productsSaveAction } from './productsActions'

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = { products: [] }

const productsReducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(productsSaveAction, (state, { payload }) => {
      state.products = payload
    }),
)

export default productsReducer
