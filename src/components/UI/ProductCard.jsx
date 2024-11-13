import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/ProductCard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // Import CartContext

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  // const isInCart = cartItems.some(cartItem => cartItem.id === item.id); // Check if the item is in the cart
  const [isClicked, setIsClicked] = useState(false); // Local state for click animation

  const handleCartAction = () => {
    addToCart(item); // Add item to the cart
    setIsClicked(true); // Trigger the animation

    // Reset the animation state after a short delay
    setTimeout(() => {
      setIsClicked(false);
    }, 300); // Match this duration with the scale animation duration
  };

  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bot d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span 
            animate={isClicked ? { scale: 1.3 } : { scale: 1 }} // Animation based on isClicked
            transition={{ type: "spring", stiffness: 200 }}
            onClick={handleCartAction}
          >
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;