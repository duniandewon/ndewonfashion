import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import TopNav from './TopNav';

const MainNav = () => {
  return (
    <nav className='navbar'>
      <Container>
        <button className='nav__toggler d-lg-none'>
          <i className='fas fa-bars'></i>
        </button>
        <ul className='nav'>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              home
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/shop' className='nav__link'>
              shop
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/blog' className='nav__link'>
              blog
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/contact' className='nav__link'>
              contact
            </NavLink>
          </li>
        </ul>
        <div className='d-lg-none'>
          <TopNav />
        </div>
      </Container>
    </nav>
  );
};

export default MainNav;
