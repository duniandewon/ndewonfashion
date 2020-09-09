import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  SET_LOADING,
  LOGOUT,
} from '../types';

export const authContext = createContext();

export const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/auth');

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.msg });
    }
  };

  const registerUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/users', formData, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  const loginUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/auth', formData, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  const logoutUser = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/auth/logout');
      console.log(res.data);
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <authContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loadUser,
        registerUser,
        loginUser,
        logoutUser,
        setLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
