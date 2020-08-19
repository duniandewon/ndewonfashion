import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const { _id, image, name, price, sale, _new } = product;

  const history = useHistory();

  const onClick = () => {
    history.push(`/${_id}`);
  };

  return (
    <div className='card' onClick={onClick}>
      <div className='card__image'>
        <img src={image} alt={name} />
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
        <span className='card__title'>{name}</span>
        <span className='card__price'>${price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
