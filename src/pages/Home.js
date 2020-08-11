import React, { Fragment } from 'react';
import ImageSlider from '../components/slides/ImageSlider';
import Section from '../layouts/Section';
import Card from '../components/Card';
import Carousel from '../components/slides/Carousel';

const Home = () => {
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
    </Fragment>
  );
};

export default Home;
