import throttle from 'lodash/throttle'
import { Store } from 'redux'
import { RootState } from './store'
import { ProductsState } from './products/productsReducer'
import { saveState } from '../utils/localStorageUtils'

type LocalStorageState = {
  products: Pick<ProductsState, 'products'>;
}

const setStateToBrowserStorage = (state: RootState) => {
  const {
    products: { products },
  } = state

  const localStorageState: LocalStorageState = {
    products: {
      products,
    },
  }

  saveState(localStorageState)
}

const startBrowserStorageUpdate = (store: Store) => {
  const saveToLocalStoreFrequency = 500
  store.subscribe(throttle(
    () => setStateToBrowserStorage(store.getState()),
    saveToLocalStoreFrequency,
  ))
}

export default startBrowserStorageUpdate
