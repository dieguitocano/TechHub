import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'


const PurchasesScreen = () => {



  const [purchases, setPurchases] = useState()
 

  useEffect(() => {
    const URL_PURCHASES = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL_PURCHASES, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])



  return (
    <div>PurchasesScreen</div>
  )
}

export default PurchasesScreen