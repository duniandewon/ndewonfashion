import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authContext } from '../../context/auth/AuthState';
import { useContext } from 'react';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user, isAuthenticated } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    ></Route>
  );
};

export default PublicRoute;
