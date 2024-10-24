import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Row } from 'reactstrap';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import 'remixicon/fonts/remixicon.css';
import {motion} from 'framer-motion';

const nav__links= [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
  {
    path:'login',
    display:'Login'
  },
  {
    path:'about',
    display:'About'
  },
]

const Header = () => {
  return( <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className='logo'>
            <img src={logo} alt ="logo" />
            <div>
              <h1>FitMart</h1>
            </div>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink
                     to={item.path}
                      className={(navClass)=>
                      navClass.isActive ? "nav__active" : "" } >
                        {item.display}
                        </NavLink>
                  </li>
                ))}
             </ul>
          </div>
 
            <div className="nav__icon">

                <motion.span whileHover={{scale:1.2}} className="fav__icon">
                  <i class="ri-heart-3-line"></i>
                  <span className="badge">1</span>
                  </motion.span>
              <motion.span whileHover={{scale:1.2}} className="cart__icon">
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span>
              </motion.span>

              <span><motion.img whileHover ={{scale:1.2}} src={userIcon} alt=""/></span>
            </div>

            <div className="mobile__menu">
            <span>
            <i class="ri-menu-line"></i>
            </span>
            </div>
        </div>
      </Row>
    </Container>
  </header>
  );
};

export default Header;
