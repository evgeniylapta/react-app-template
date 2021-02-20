import axios from 'axios'
import LoadProductsConfig from '../models/products/LoadProductsConfig'
import Product from '../models/products/Product'

export async function fetchProducts(config: LoadProductsConfig): Promise<Product[]> {
  const response = await axios.get('/TODO_REMOVE_DATA.json', { params: config })
  return response.data.products
}
