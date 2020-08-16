import React, { useState, useContext, useEffect } from 'react';
import { authContext } from '../context/auth/AuthState';

import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';

const Login = ({ history }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isAuthenticated, error, loadUser } = useContext(authContext);

  useEffect(() => {
    loadUser();
    if (isAuthenticated && !error) {
      history.goBack();
    }

    // eslint-disable-next-line
  }, [isAuthenticated, history]);

  return (
    <div className='auth__flip'>
      <div className={`auth__container ${isFlipped ? 'is-flipped' : ''}`}>
        <RegisterForm setIsFlipped={setIsFlipped} />
        <LoginForm setIsFlipped={setIsFlipped} />
      </div>
    </div>
  );
};

export default Login;
