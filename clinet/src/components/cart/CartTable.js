import React, { Fragment, useContext } from 'react';

import { cartContext } from '../../context/cart/CartState';

import CartAmountToggler from './CartAmountToggler';

const CartTable = ({ items }) => {
  const { toggleAmount, removeFromCart } = useContext(cartContext);

  const toggleCartAmount = (e, item) => {
    if (item.count === 1 && e.target.innerText === '-') {
      removeFromCart(item);
    }

    if (e.target.innerText === '+') {
      toggleAmount(item, 'inc');
    }

    if (e.target.innerText === '-') {
      toggleAmount(item, 'dec');
    }
  };

  const cartItems = items.map((item) => (
    <tr key={item.chosenSize} className='cart__items'>
      <td className='cart__image'>
        <img src={item.image[0]} alt={item.name} />
      </td>
      <td className='cart__name'>{item.name}</td>
      <td>
        <CartAmountToggler
          amount={item.count}
          toggleAmount={(e) => toggleCartAmount(e, item)}
        />
      </td>
      <td style={{ textAlign: 'right' }}>{item.chosenSize}</td>
      <td style={{ textAlign: 'right' }}>{item.price}</td>
    </tr>
  ));

  return (
    <table className='cart'>
      <tbody>
        <tr className='cart__header'>
          <th colSpan='2'>product</th>
          <th>quantity</th>
          <th style={{ textAlign: 'right' }}>size</th>
          <th style={{ textAlign: 'right' }}>price</th>
        </tr>
        <Fragment>{cartItems}</Fragment>
      </tbody>
    </table>
  );
};

export default CartTable;
