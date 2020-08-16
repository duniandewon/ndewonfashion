import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  AUTH_ERROR,
  LOGOUT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
        loading: false,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};