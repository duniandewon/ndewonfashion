import React from 'react';

const CheckoutSections = ({ children, title }) => {
  return (
    <div className='checkout__section'>
      <div className='checkout__title'>{title}</div>
      {children}
    </div>
  );
};

export default CheckoutSections;
