import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productsLoadAction } from '../../stateManagement/products/productsActions'
import LoadProductsConfig from '../../models/products/LoadProductsConfig'
import ProductCategory from '../../models/products/ProductCategory'

export default function useLoadProducts() {
  const dispatch = useDispatch()

  useEffect(() => {
    const config: LoadProductsConfig = {
      category: ProductCategory.One,
    }

    dispatch(productsLoadAction(config))
  }, [dispatch])
}
