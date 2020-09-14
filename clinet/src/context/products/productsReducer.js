import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        product: null,
        loading: false,
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: null,
        error: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
