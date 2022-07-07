import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
     dispatch(getAllProducts())
  
  }, [])
  
  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen