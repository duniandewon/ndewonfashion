import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  SET_LOADING,
  GET_PRODUCT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: null,
        error: action.payload,
        loading: false,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
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
