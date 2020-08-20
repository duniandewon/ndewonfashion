import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='sidenav__item'>
        <input type='checkbox' name='sidenav' id='women' />
        <label htmlFor='women'>women</label>
        <ul className='sidenav__item-content'>
          <li>
            <Link to='/women/dress'>dress</Link>
          </li>
          <li>
            <Link to='/women/tops'>tops</Link>
          </li>
          <li>
            <Link to='/women/skirts'>skirts</Link>
          </li>
        </ul>
      </div>
      <div className='sidenav__item'>
        <input type='checkbox' name='sidenav' id='men' />
        <label htmlFor='men'>men</label>
        <ul className='sidenav__item-content'>
          <li>
            <Link to='/men/shirt'>shirt</Link>
          </li>
          <li>
            <Link to='/men/t-shirt'>t-shirt</Link>
          </li>
          <li>
            <Link to='/men/shorts'>shorts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
