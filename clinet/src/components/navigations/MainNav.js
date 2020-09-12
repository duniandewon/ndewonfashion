import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <ul className='nav'>
      <li className='nav__item'>
        <Link to='/' className='nav__link'>
          home
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/women' className='nav__link'>
          women
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/men' className='nav__link'>
          men
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/blog' className='nav__link'>
          blog
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/contact' className='nav__link'>
          contact
        </Link>
      </li>
    </ul>
  );
};

export default MainNav;
