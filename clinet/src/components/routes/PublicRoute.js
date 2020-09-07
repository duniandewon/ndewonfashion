import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authContext } from '../../context/auth/AuthState';
import { useContext } from 'react';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user, isAuthenticated } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isAuthenticated && restricted ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PublicRoute;
