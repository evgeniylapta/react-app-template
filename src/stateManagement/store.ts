import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import { getMiddleware } from './middleware'
import { loadState } from '../utils/localStorageUtils'
import products from './products/productsReducer'

export const history = createBrowserHistory()
const preloadedState = loadState()
const rootReducer = combineReducers({
  products,
  router: connectRouter(history),
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: true,
  middleware: getMiddleware(history),
})

export type RootState = ReturnType<typeof rootReducer>
export default store
