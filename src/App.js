import React from 'react'
// import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilterProducts from './components/FilterProducts/FilterProducts';
import SingleProduct from './components/FilterProducts/SingleProduct';
import {useSelector } from 'react-redux';
function App() {
  const cart = useSelector((state)=> state.cart.cart)
  const totalPrice = useSelector((state)=> state.cart.totalPrice)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)

  console.log("cart",cart)
  console.log("totalPrice",totalPrice)
  console.log("totalAmount",totalAmount)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/filterProducts/:type' element={<FilterProducts />}/>
          <Route path='/filterProducts/:type/:id' element={<SingleProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


