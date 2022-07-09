import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Products/ProductScreen'


function App() {

  return (

    <div className="App">
      
      <HeaderScreen />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/purchases' element={<PurchasesScreen />}/>
        </Route>
        <Route path='/product/:id' element={<ProductScreen />}/>
      </Routes>
    </div>
  )
}

export default App
