import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'

const CartScreen = () => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"

    }
    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

   const cart = useSelector(state => state.cart)

  return (
    <div>
      <button onClick={postPurchase}>
        <h2>Confirm Order</h2>
      </button>
      <h3>My Cart</h3>
      {
        cart?.map(productCart => (
          <CartInfo
          key={productCart.id} 
          productCart={productCart}
          />
        ))
      }
    </div>
  )
}

export default CartScreen