import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchasesCard from './PurchasesCard'


const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()
 

  useEffect(() => {
    const URL_PURCHASES = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL_PURCHASES, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])

 console.log(purchases)

  return (
    <div>
      <h2 className='purchases'>My Purchases</h2>
      <div className='purchases-container'>
        {
          purchases?.map(purchase =>(
            <PurchasesCard
            key={purchase.id}
            purchase={purchase} 
            />
          ))
        }

      </div>
    </div>
  )
}

export default PurchasesScreen