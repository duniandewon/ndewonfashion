import React from 'react';

const PaymentOptions = ({ payment, setPayment }) => {
  return (
    <div className='checkout__payments'>
      <div className='checkout__payment'>
        <input
          type='radio'
          name='payment'
          id='cod'
          value='cod'
          checked={payment === 'cod'}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor='cod'>COD</label>
      </div>
      <div className='checkout__payment'>
        <input
          type='radio'
          name='payment'
          id='paypal'
          value='paypal'
          checked={payment === 'paypal'}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor='paypal'>PAYPAL</label>
      </div>
    </div>
  );
};

export default PaymentOptions;
