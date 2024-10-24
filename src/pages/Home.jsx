import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import '../styles/Home.css';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {

    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'ball'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'Bat'
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'accessories'
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'supplement'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'shoe'
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
      <Helmet title={"Home"}>
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__subtitle">Trending product in {year}</p>
                  <h2>Make your lifestyle Fit & Strong</h2>
                  <p>
                    "Discover the ultimate destination for all your sports needs.
                    From top-quality gear to the latest in athletic wear, we've got everything you need to elevate your game.
                    Shop now and fuel your passion for sports with the best in the business!"
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                    <Link to='shop' className='texty'>SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        <section className="tre__prod">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
        </section>
        <section className="best__sales">
        <Container>
        <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
        </section>
        <section className="timer__count">
          <Container>
            <Row>
              <Col lg='6' md='6'>
              <div className="clock__top_content">
                <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
                <h3 className='text-white fs-5 mb-3' >Quality Shoes</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to= "/shop">Visit Store</Link>
              </motion.button>
              </Col>
              <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="new__arrivals">
          <Container>
            <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
              <ProductList data={mobileProducts} />
              <br />
              <ProductList data={wirelessProducts} />
            </Row>
          </Container>
        </section>

        <section className="popular__category">
        <Container>
            <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">Popular in category</h2>
            </Col>
              <ProductList data={popularProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default Home;
