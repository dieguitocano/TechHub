import React, { useRef } from 'react'
import './style/cartInfo.css'
const CartInfo = ({ productCart }) => {
  const cart = useRef()


  return (

    <section className='cart' ref={cart}>
      <h4>{productCart.brand}</h4>
      <h2>{productCart.title}</h2>
      <p>{productCart?.productsIncart?.quantity}</p>
    </section>
  )
}

export default CartInfo