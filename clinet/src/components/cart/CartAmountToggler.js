import React from 'react';

const CartAmountToggler = ({ amount, toggleAmount }) => {
  return (
    <div className='cart__amount-toggler'>
      <button onClick={toggleAmount}>+</button>
      <span>{amount}</span>
      <button onClick={toggleAmount}>-</button>
    </div>
  );
};

export default CartAmountToggler;
