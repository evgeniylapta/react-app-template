import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCategory from '../../../models/products/ProductCategory'

export interface ItemProps {
  name: string;
  category: ProductCategory;
}

const Product: FC<ItemProps> = ({ name, category }) => {
  const { t } = useTranslation()

  return (
    <>
      <hr />
      <h4>
        {t('productNameLabel')}
        {name}
      </h4>
      <h4>
        {t('productCategoryLabel')}
        {category}
      </h4>
    </>
  )
}

export default Product
