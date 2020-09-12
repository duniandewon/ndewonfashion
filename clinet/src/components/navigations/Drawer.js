import React from 'react';

import { Link } from 'react-router-dom';

const Drawer = ({ open, setOpen }) => {
  return (
    <div className={`drawer ${open ? 'active' : ''}`}>
      <button className='drawer__close' onClick={() => setOpen(!open)}>
        <i className='fas fa-times'></i>
      </button>
      <div className='drawer__item'>
        <Link to='/' className='drawer__link' onClick={() => setOpen(!open)}>
          home
        </Link>
      </div>
      <div className='drawer__item'>
        <Link
          to='/women'
          className='drawer__link'
          onClick={() => setOpen(!open)}
        >
          women
        </Link>
      </div>
      <div className='drawer__item'>
        <Link to='/men' className='drawer__link' onClick={() => setOpen(!open)}>
          men
        </Link>
      </div>
      <div className='drawer__item'>
        <Link
          to='/contact'
          className='drawer__link'
          onClick={() => setOpen(!open)}
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
