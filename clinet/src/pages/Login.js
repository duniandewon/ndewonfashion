import React, { useState } from 'react';

import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
