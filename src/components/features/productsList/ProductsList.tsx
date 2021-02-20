import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../stateManagement/products/productsSelectors'
import Product from './Product'
import useLoadProducts from '../../../hooks/products/useLoadProducts'

const ProductsList: FC = () => {
  useLoadProducts()
  const products = useSelector(selectProducts)

  return (
    <>
      {products.map(({ name, category }) => (
        <Product
          key={name}
          name={name}
          category={category}
        />
      ))}
    </>
  )
}

export default ProductsList
