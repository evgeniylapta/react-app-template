import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ProductsList from '../features/productsList/ProductsList'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('homeTitle')}</h1>
      <ProductsList />
    </div>
  )
}

export default Home
