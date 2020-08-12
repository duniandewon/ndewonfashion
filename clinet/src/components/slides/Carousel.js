import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useRef } from 'react';

import Card from '../Card';

const Carousel = () => {
  const handleOnDragStart = (e) => e.preventDefault();

  const settings = {
    mouseTrackingEnabled: true,
    autoPlay: true,
    stopAutoPlayOnHover: true,
    autoPlayInterval: 5000,
    buttonsDisabled: true,
    dotsDisabled: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  };

  const carousel = useRef(null);

  return (
    <div className='carousel'>
      <AliceCarousel {...settings} ref={carousel}>
        <div className='carousel__item' onDragStart={handleOnDragStart}>
          <Card
            center
            img='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='A very cool product'
            price='35,00'
            _new
          />
        </div>
        <div className='carousel__item' onDragStart={handleOnDragStart}>
          <Card
            center
            img='https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='A very cool product'
            price='35,00'
          />
        </div>
        <div className='carousel__item' onDragStart={handleOnDragStart}>
          <Card
            center
            img='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title='A very cool product'
            price='35,00'
            sale
          />
        </div>
        <div className='carousel__item' onDragStart={handleOnDragStart}>
          <Card
            center
            img='https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title='A very cool product'
            price='35,00'
          />
        </div>
      </AliceCarousel>
      <button
        className='carousel__nav carousel__nav--prev'
        onClick={() => carousel.current.slidePrev()}
      >
        <i className='fas fa-chevron-left'></i>
      </button>
      <button
        className='carousel__nav carousel__nav--next'
        onClick={() => carousel.current.slideNext()}
      >
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Carousel;
