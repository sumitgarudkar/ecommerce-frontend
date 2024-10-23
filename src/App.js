// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen'
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/cart/:id?' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/shipping' element={<ShippingScreen />} />
      </Routes>
    </Router>
  );
};
export default App;