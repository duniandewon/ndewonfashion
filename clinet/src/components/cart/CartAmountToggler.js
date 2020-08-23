import React from 'react';

const CartAmountToggler = ({ amount, toggleAmount }) => {
  return (
    <div className='cart__amount-toggler'>
      <button onClick={() => toggleAmount('inc')}>+</button>
      <span>{amount}</span>
      <button onClick={() => amount > 1 && toggleAmount('dec')}>-</button>
    </div>
  );
};

export default CartAmountToggler;
