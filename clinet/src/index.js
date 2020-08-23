import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import { AuthState } from './context/auth/AuthState';
import { ProductsState } from './context/products/ProductsState';
import { CartState } from './context/cart/CartState';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ProductsState>
        <CartState>
          <Router>
            <App />
          </Router>
        </CartState>
      </ProductsState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
