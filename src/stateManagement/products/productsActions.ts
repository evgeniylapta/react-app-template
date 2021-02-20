import { createAction } from '@reduxjs/toolkit'
import LoadProductsConfig from '../../models/products/LoadProductsConfig'
import Product from '../../models/products/Product'

// payload type to use in saga
export type ProductsLoadPayload = LoadProductsConfig
export const productsLoadAction = createAction<ProductsLoadPayload>('products/load')
export const productsSaveAction = createAction<Product[]>('products/save')
