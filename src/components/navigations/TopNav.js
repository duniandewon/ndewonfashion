import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='top-nav'>
      <Link className='top-nav__item' to='/login'>
        <i className='fas fa-user'></i>
        <span>Login or create account</span>
      </Link>
      <Link className='top-nav__item' to='/cart'>
        <div className='shopping-cart'>
          <i class='fas fa-shopping-bag'></i>
          <p className='cart-amount'>0</p>
          <span>Shopping cart</span>
        </div>
      </Link>
    </div>
  );
};

export default TopNav;
