// src/App.js
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { CartProvider } from './context/CartContext'; // Import the CartProvider

const App = () => {
  return (
    <CartProvider> {/* Wrap your layout with CartProvider */}
      <Layout />
    </CartProvider>
  );
}

export default App;
