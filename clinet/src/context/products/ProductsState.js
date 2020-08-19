import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import productsReducer from './productsReducer';

import { SET_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCT } from '../types';

export const productContext = createContext();

export const ProductsState = ({ children }) => {
  const initialState = {
    products: null,
    product: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/products');

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: error.response.data.msg,
      });
    }
  };

  const getProduct = (product) =>
    dispatch({ type: GET_PRODUCT, payload: product });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <productContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        error: state.error,
        getProducts,
        getProduct,
        setLoading,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductsState;
