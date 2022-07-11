import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './style/productInfo.css'


const ProductInfoId = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()

    const addToCart = () => {
        const URL_CART = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const addproduct = {
            id: product.id,
            quantity: counter
        }

        axios.post(URL_CART, addproduct, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductCart)
                
            })
            .catch(err => console.log(err.data))
    }

    const minusOne = () => {
        const minus = counter - 1
        if (minus >= 1) {
            setCounter(minus)
        }
    }

    const plusOne = () => setCounter(counter + 1)



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
            <button onClick={addToCart} className='product-info-button'>Add to cart         <span className="material-symbols-outlined">
                shopping_cart
            </span></button>

        </article>

    )
}

export default ProductInfoId