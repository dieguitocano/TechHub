import React, { useState } from 'react'
import './style/productInfo.css'


const ProductInfoId = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const minusOne = () => {
        const minus = counter - 1
        if(minus >= 1) {
            setCounter(minus)
        }
    }

    const plusOne = () => setCounter(counter + 1)

    console.log(product)

    return (
        <article className='product-info-card'>
            <h2 className='product-info-title'>{product?.title}</h2>
            <p className='product-info-description'>{product?.description}</p>
            <div>
                <h3 className='card-product-price-label 
                product-info-label'>Price</h3>
                <p className='card-product-price-number 
                product-info-price'>$ {product?.price}</p>
            </div>
            <div className='product-info-quantity-container'>
                <div onClick={minusOne} className='product-info-minus'>-</div>
                <div>{counter}</div>
                <div onClick={plusOne} className='product-info-plus'>+</div>
            </div>
            <button >Add to cart<span className="material-symbols-outlined">
                        shopping_cart
                    </span></button>

        </article>
    )
}

export default ProductInfoId