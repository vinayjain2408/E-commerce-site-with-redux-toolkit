import React from 'react'
// import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilterProducts from './components/FilterProducts/FilterProducts';
import SingleProduct from './components/FilterProducts/SingleProduct';

function App() {
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


