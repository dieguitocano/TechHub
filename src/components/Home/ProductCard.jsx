import React from 'react'

const ProductCard = ({ product }) => {

    
    return (
        <article className='card-product'>
            <header className='card-product-header-img'>
                <img className='card-product-img-back' src={product.productImgs[1]} alt="" />
                <img className='card-product-img' src={product.productImgs[0]} alt="" />
            </header>
            <div className='card-product-body'>
                <h2 className='card-product-title'>{product.title}</h2>
                <div>
                    <h3 className='card-product-price-label'>Price</h3>
                    <p className='card-product-price-number'>$ {product.price}</p>
                </div>
                <button className='card-product-btn'>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </button>

            </div>
        </article>
    )
}

export default ProductCard