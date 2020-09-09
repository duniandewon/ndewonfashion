import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { authContext } from '../../context/auth/AuthState';
import { cartContext } from '../../context/cart/CartState';

import NavDropdown from '../navigations/NavDropdown';

const TopNav = () => {
  const { user, isAuthenticated, logoutUser } = useContext(authContext);
  const { amount } = useContext(cartContext);

  const dropdown = () => (
    <NavDropdown>
      <ul>
        <li className='dropdown__item'>
          <Link to='/account'>Account</Link>
        </li>
        <li className='dropdown__item'>
          <Link to='/orders'>Orders</Link>
        </li>
        <li className='dropdown__item'>
          <Link to='#!' onClick={() => logoutUser()}>
            Logout
          </Link>
        </li>
      </ul>
    </NavDropdown>
  );

  return (
    <ul className='top-nav'>
      {user && isAuthenticated ? (
        <li className='nav__item dropdown'>
          <Link to='/profile'>
            <i className='fas fa-user'></i>
            <span>{user.username}</span>
          </Link>
          {dropdown()}
        </li>
      ) : (
        <li className='nav__item'>
          <Link to='/login'>
            <i className='fas fa-user'></i>
            <span>Login</span>
          </Link>
        </li>
      )}
      <li className='nav__item'>
        <Link to='/cart'>
          <div className='shopping-cart'>
            <i className='fas fa-shopping-bag'></i>
            <p className='cart-amount'>{amount}</p>
            <span>Cart</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default TopNav;
