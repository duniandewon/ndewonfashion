import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { useRef } from 'react';

const ImageSlider = () => {
  const imageSlider = useRef(null);

  const [slidePosition, setSlidePosition] = useState(0);

  const handleOnDragStart = (e) => e.preventDefault();

  const onSlideChange = (e) => {
    console.debug(e.slide);
    setSlidePosition(e.slide);
  };

  const images = [
    'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  const slides = images.map((galeryItem, index) => (
    <div
      key={index}
      className='slider-item'
      onDragStart={handleOnDragStart}
      style={{
        background: `linear-gradient(rgba(2, 0, 36, 0.7), rgba(0, 0, 0, 0.7)), url(${galeryItem})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='slider-item__body'>
        <h3>NEWARRIVALS</h3>
        <h2>DENIM JACKETS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          incidunt cumque quaerat culpa sapiente perferendis accusantium
          necessitatibus recusandae fugiat iusto, sint quibusdam porro
          architecto ipsa beatae dolorum deserunt? Unde, maxime!
        </p>

        <div className='images-slider__actions'>
          <Link to='/shop' className='btn btn__primary'>
            discover more
          </Link>
        </div>
      </div>
    </div>
  ));

  const settings = {
    items: slides,
    mouseTrackingEnabled: true,
    autoPlay: true,
    stopAutoPlayOnHover: false,
    autoPlayInterval: 3000,
    buttonsDisabled: true,
    dotsDisabled: true,
    onSlideChange,
  };

  return (
    <div className='image-slider'>
      <AliceCarousel {...settings} ref={imageSlider} />
      <div className='slider-nav'>
        <button
          className='slider-nav__item slider-nav__item--prev'
          onClick={() => imageSlider.current.slidePrev()}
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <p>{`${slidePosition + 1} / ${slides.length}`}</p>
        <button
          className='slider-nav__item slider-nav__item--next'
          onClick={() => imageSlider.current.slideNext()}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
