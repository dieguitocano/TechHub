import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'


const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  const [productSearch, setProductSearch] = useState()
  const [typeList, setTypeList] = useState()

  console.log(products)

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])

  return (
    <div className='home'>
      <InputSearch setProductSearch={setProductSearch}/>
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
    </div>
  )
}

export default HomeScreen