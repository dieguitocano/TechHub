import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchasesCard = ({purchase}) => {

    console.log(purchase)
  return (

    <article className='purchase-card'>
        <h3>{purchase.updatedAt}</h3>
        {
            purchase.cart.products.map(product =>(
                <ProductPurchase
                key={product.id}
                product={product} 
                />
            ))
        }

    </article>
  )
}

export default PurchasesCard