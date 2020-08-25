import React, { createContext, useReducer } from 'react';

import cartReducer from './cartReducer';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_AMOUNT,
  GET_SUBTOTALS,
  SET_SHIPPING,
  CLEAR_CART,
} from '../types';

export const cartContext = createContext();

export const CartState = ({ children }) => {
  const initialState = {
    items: [],
    subtotal: 0,
    amount: 0,
    shippingAddress: '',
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) =>
    dispatch({ type: ADD_TO_CART, payload: product });

  const removeFromCart = (id) => console.log('remove from cart');

  const toggleAmount = (product, toggle) =>
    dispatch({ type: TOGGLE_AMOUNT, payload: { product, toggle } });

  const getSubtotals = () => dispatch({ type: GET_SUBTOTALS });

  const setShippingAddress = (address) => console.log('set shipping');

  const clearCart = () => console.log('set shipping');

  return (
    <cartContext.Provider
      value={{
        items: state.items,
        subtotal: state.subtotal,
        amount: state.amount,
        shippingAddress: state.shippingAddress,
        addToCart,
        removeFromCart,
        toggleAmount,
        setShippingAddress,
        getSubtotals,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
