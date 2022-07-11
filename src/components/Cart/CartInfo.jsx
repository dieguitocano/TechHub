import React from 'react'

const CartInfo = ({productCart}) => {


  return (
   <section>
    <h4>{productCart.brand}</h4>
   <h2>{productCart.title}</h2>
   <p>{productCart?.productsIncart?.quantity}</p>
   </section>
  )
}

export default CartInfo