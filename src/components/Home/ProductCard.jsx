import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import { getAllProductCart } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const goToProductId = () => navigate(`/product/${product.id}`)

    const dispatch = useDispatch()

    

    const addCartProduct = () => {
       g
        const URL_CART = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'


        const objProduct = {
            id: product.id,
            quantity: 1
        }


        axios.post(URL_CART, objProduct, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductCart())
            })
            .catch(err => console.log(err.data))

    }




    return (
        <article className='card-product'>
            <header onClick={goToProductId} className='card-product-header-img'>
                <img className='card-product-img-back' src={product.productImgs[1]} alt="" />
                <img className='card-product-img' src={product.productImgs[0]} alt="" />
            </header>
            <div className='card-product-body'>
                <h2 className='card-product-title'>{product.title}</h2>
                <div>
                    <h3 className='card-product-price-label'>Price</h3>
                    <p className='card-product-price-number'>$ {product.price}</p>
                </div>

                <button onClick={addCartProduct} className='card-product-btn'>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </button>

            </div>
        </article>
    )
}

export default ProductCard