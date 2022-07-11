import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Products/ProductScreen'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import axios from 'axios'
import getConfig from './utils/getConfig'


function App() {

/*
TO CREATE NEW USER
  useEffect(() => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    const newUser = {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@gmail.com",
      password: "pass1234",
      phone: "1234567891",
      role: "admin"
    }
    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))

  }, [])*/







  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])


  return (

    <div className="App">

      <HeaderScreen />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/purchases' element={<PurchasesScreen />} />
        </Route>
        <Route path='/product/:id' element={<ProductScreen />} />
      </Routes>
    </div>
  )
}

export default App
