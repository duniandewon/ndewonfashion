import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Login from './pages/Login';

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
    },
    {
      id: 'shopWomen',
      path: '/women',
      component: Shop,
      exact: false,
    },
    {
      id: 'shopMen',
      path: '/men',
      component: Shop,
      exact: false,
    },
    {
      id: 'contact',
      path: '/contact',
      component: Contact,
      exact: false,
    },
    {
      id: 'cart',
      path: '/cart',
      component: Cart,
      exact: false,
    },
    {
      id: 'checkout',
      path: '/checkout',
      component: CheckOut,
      exact: false,
    },
    {
      id: 'login',
      path: '/login',
      component: Login,
      exact: false,
    },
    {
      id: 'product',
      path: '/:prod_id',
      component: Product,
      exact: false,
    },
  ];

  return (
    <Fragment>
      <Header />
      <MainNav />
      <LoadingSpinner />
      <Main>
        <Switch>
          {routes.map(({ exact, path, component, id }) => (
            <Route exact={exact} path={path} component={component} key={id} />
          ))}
        </Switch>
      </Main>
      <Footer />
    </Fragment>
  );
}

export default App;
