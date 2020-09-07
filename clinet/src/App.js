import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Login from './pages/Login';
import ConfirmEmail from './pages/ConfirmEmail';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

import MainNav from './components/navigations/MainNav';
import LoadingSpinner from './layouts/LoadingSpinner';

import './scss/styles.scss';

function App() {
  const routes = [
    {
      id: 'home',
      path: '/',
      component: Home,
      exact: true,
      restricted: false,
      _private: false,
    },
    {
      id: 'shopWomen',
      path: '/women',
      component: Shop,
      exact: false,
      restricted: false,
      _private: false,
    },
    {
      id: 'shopMen',
      path: '/men',
      component: Shop,
      exact: false,
      restricted: false,
      _private: false,
    },
    {
      id: 'contact',
      path: '/contact',
      component: Contact,
      exact: false,
      restricted: false,
      _private: false,
    },
    {
      id: 'cart',
      path: '/cart',
      component: Cart,
      exact: false,
      restricted: false,
      _private: false,
    },
    {
      id: 'checkout',
      path: '/checkout',
      component: CheckOut,
      exact: false,
      restricted: false,
      _private: true,
    },
    {
      id: 'login',
      path: '/login',
      component: Login,
      exact: false,
      restricted: true,
      _private: false,
    },
    {
      id: 'confemail',
      path: '/confirm-email',
      component: ConfirmEmail,
      exact: false,
      restricted: true,
      _private: false,
    },
    {
      id: 'product',
      path: '/:prod_id',
      component: Product,
      exact: false,
      restricted: false,
      _private: false,
    },
  ];

  const pages = () => (
    <Switch>
      {routes.map(({ exact, path, component, id, restricted, _private }) =>
        _private ? (
          <PrivateRoute
            exact={exact}
            path={path}
            restricted={restricted}
            component={component}
            key={id}
          />
        ) : (
          <PublicRoute
            exact={exact}
            path={path}
            restricted={restricted}
            component={component}
            key={id}
          />
        )
      )}
    </Switch>
  );

  return (
    <Fragment>
      <Header />
      <MainNav />
      <LoadingSpinner />
      <Main>{pages()}</Main>
      <Footer />
    </Fragment>
  );
}

export default App;
