import { takeLatest, call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  ProductsLoadPayload,
  productsLoadAction,
  productsSaveAction,
} from './productsActions'
import { fetchProducts } from '../../api/productsApi'

function* productsLoad({ payload: config }: PayloadAction<ProductsLoadPayload>) {
  const products = yield call(fetchProducts, config)
  yield put(productsSaveAction(products))
}

export default function* () {
  yield takeLatest([productsLoadAction], productsLoad)
}
