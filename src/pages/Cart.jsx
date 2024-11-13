// src/components/Cart/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart">
    <center> <h2>Your Shopping Cart</h2></center> 
      {cartItems.length === 0 ? (
       <center> <p>Your cart is empty</p></center>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imgUrl} alt={item.productName} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.productName}</h3>
                <span className="cart-item-price">${item.price}</span>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
