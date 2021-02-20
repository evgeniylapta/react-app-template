import { all } from 'redux-saga/effects'
import productsSaga from './products/productsSaga'

export default function* saga() {
  yield all([
    productsSaga(),
  ])
}
