import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import About from '../pages/About'; 
import Checkout from '../pages/Checkout';
import ProductDetails from '../pages/ProductDetails';

const Routerss = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/shop/:id' element={<ProductDetails />} />
      <Route path='/about' element={<About />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
};

export default Routerss;
