import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <h1>FitMart - A Sports Store</h1>
          <p>Your ultimate destination for top-quality sports gear and apparel.</p>
          <p>Explore our wide range of products and elevate your game.</p>
        </div>
        <div className="footer__bottom">
          <ul className="footer__categories">
            <li>Fitness</li>
            <li>Football</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Running</li>
          </ul>
          <ul className="footer__links">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="footer__contact">
            <h2>Contact Us</h2>
            <p>Email: contact@fitmart.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;