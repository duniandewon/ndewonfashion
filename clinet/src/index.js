import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import { AuthState } from './context/auth/AuthState';
import { ProductsState } from './context/products/ProductsState';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ProductsState>
        <Router>
          <App />
        </Router>
      </ProductsState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
