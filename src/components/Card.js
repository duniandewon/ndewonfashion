import React from 'react';

const Card = ({ img, title, price, sale, _new, center }) => {
  return (
    <div className='card' style={{ margin: `${center ? '0 auto' : 0}` }}>
      <div className='card__image'>
        <img src={img} alt={title} />
        <button className='add-to-cart'>
          <i className='fas fa-shopping-bag' />
          <span>add to cart</span>
        </button>
        <div className='card__badges'>
          {sale && (
            <span className='card__badge card__badge--sale'>on sale</span>
          )}
          {_new && <span className='card__badge card__badge--new'>new</span>}
        </div>
      </div>
      <div className='card__body'>
        <span className='card__title'>{title}</span>
        <span className='card__price'>${price}</span>
      </div>
    </div>
  );
};

export default Card;
