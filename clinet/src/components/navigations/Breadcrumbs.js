import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const paths = pathname.split('/').map((path, i, arr) => {
    if (i === 0) {
      return {
        id: 'home',
        content: <Link to='/'>home</Link>,
        active: i === arr.length - 1,
      };
    }

    if (i === arr.length - 1) {
      return {
        id: path,
        content: path,
        active: i === arr.length - 1,
      };
    }

    return {
      id: path,
      content: <Link to={`${arr.slice(0, i + 1).join('/')}`}>{path}</Link>,
      active: i === arr.length - 1,
    };
  });

  return (
    <ul className='breadcrumbs'>
      {paths.map((path) => (
        <li className='breadcrumbs__item'>{path.content}</li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
