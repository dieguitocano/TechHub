import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProducts from './SimilarProducts'
import './style/productScreen.css'


const classImg = ['', 'second-img', 'third-img']

const ProductScreen = () => {

    const [product, setProduct] = useState()
    const [indexClass, setIndexClass] = useState(0)
    const { id } = useParams()


    useEffect(() => {
        const URL_PRODBYID = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL_PRODBYID)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [id])

    console.log(product)





    const clickPrev = () => {
        const prevClass = indexClass - 1
        if (indexClass < 0) {
            setIndexClass(classImg.length - 1)
        } else {
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {

        const nextClass = indexClass + 1
        if (nextClass >= classImg.length) {
            setIndexClass(0)
        } else {
            setIndexClass(nextClass)
        }
    }


    return (
        <>
            <div className='product'>
                <div className='slider'>
                    <div onClick={clickPrev} className='slider-prev'><span className="material-symbols-outlined">
                        arrow_back_ios
                    </span></div>
                    <div className={`slider-container ${classImg[indexClass]}`}>
                        {
                            product?.productImgs.map(imgSrc => (
                                <img
                                    key={imgSrc}
                                    src={imgSrc}
                                    alt=''
                                    className='slider-imgs'
                                />
                            ))
                        }
                    </div>
                    <div onClick={clickNext} className='slider-next'><span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span></div>
                    <div className='puntitos-container'>
                        <div
                            onClick={() => setIndexClass(0)}
                            className={indexClass == 0 ?
                                'puntitos puntitos-active' : 'puntitos'}>
                        </div>
                        <div
                            onClick={() => setIndexClass(1)}
                            className={indexClass == 1 ?
                                'puntitos puntitos-active' : 'puntitos'}>
                        </div>
                        <div
                            onClick={() => setIndexClass(2)}
                            className={indexClass == 2 ?
                                'puntitos puntitos-active' : 'puntitos'}>
                        </div>
                    </div>
                </div>


                <ProductInfoId product={product} />


            </div >
            <div className='similar-products-container'>
                <SimilarProducts product={product} />
            </div>

        </>
    )
}


export default ProductScreen