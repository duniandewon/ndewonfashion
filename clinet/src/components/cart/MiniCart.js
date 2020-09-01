import React from 'react';

const MiniCart = ({ items, subtotal }) => {
  return (
    <div className='mini-cart-container'>
      <h2>your cart</h2>
      <ul className='mini-cart'>
        {items.map((item) => (
          <li className='mini-cart__item' key={item._id}>
            <div className='mini-cart__image'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='mini-cart__body'>
              <h3>{item.name}</h3>
              <span>${item.price}</span>
              <span>size: {item.chosenSize}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className='receipt'>
        <span className='receipt__label'>subtotal</span>
        <span className='receipt__price'>${subtotal}</span>
        <span className='receipt__label'>shipping</span>
        <span className='receipt__price'>free</span>
        <span className='receipt__label receipt__label--total'>total</span>
        <span className='receipt__price receipt__price--total'>
          ${subtotal}
        </span>
      </div>
    </div>
  );
};

export default MiniCart;
