import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <div className='d-lg-none'>
          <TopNav />
        </div>
      </Container>
    </nav>
  );
};

export default MainNav;
