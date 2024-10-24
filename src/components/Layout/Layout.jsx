import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routerss from '../../routerss/Routerss';

const Layout = () => {
  return( 
  <div>
  <Header/>
  <div>
    <Routerss />
  </div>
  <Footer />
  </div> 
  );
};

export default Layout
