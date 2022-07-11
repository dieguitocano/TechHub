import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Shared/Footer'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'


const HomeScreen = () => {

  

  const products = useSelector(state => state.products)

  const [productSearch, setProductSearch] = useState()
  const [typeList, setTypeList] = useState()

  console.log(products)

 
  return (
    <div className='home'>
      <InputSearch setProductSearch={setProductSearch} />
      <div className='products-container'>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }

      </div>
      <Footer />
    </div>
  )
}

export default HomeScreen