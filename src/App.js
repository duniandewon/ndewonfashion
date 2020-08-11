import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

import MainNav from './components/navigations/MainNav';

import './scss/styles.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <MainNav />
      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Main>
      <Footer />
    </Fragment>
  );
}

export default App;
