import React, { Fragment, useContext, useEffect } from 'react';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import getRandomProducts from '../utils/getRandomProducts';

import Section from '../layouts/Section';

import ImageSlider from '../components/slides/ImageSlider';
import Carousel from '../components/slides/Carousel';
import ProductList from '../components/products/ProductList';

const Home = () => {
  const { loadUser } = useContext(authContext);
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    loadUser();
    getProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ImageSlider />
      <section className='services'>
        <div className='service'>
          <i className='fas fa-money-check'></i>
          <span>FAST AND SECURE PAYMENT</span>
        </div>
        <div className='service'>
          <i className='fas fa-star'></i>
          <span>PREMIUN PRODUCTS</span>
        </div>
        <div className='service'>
          <i className='fas fa-shipping-fast'></i>
          <span>FREE AND FAST SHIPPING</span>
        </div>
      </section>
      <Section title='latest product'>
        <Carousel />
      </Section>
      <Section title='Our top selling products'>
        <ProductList
          products={
            products && getRandomProducts(products, products.length - 1)
          }
        />
      </Section>
    </Fragment>
  );
};

export default Home;
