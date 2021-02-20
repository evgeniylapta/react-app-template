import { RootState } from '../store'

function selectProductsState(store: RootState) {
  return store.products
}

export function selectProducts(store: RootState) {
  return selectProductsState(store).products
}
