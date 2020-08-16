import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { authContext } from '../../context/auth/AuthState';

const LoginForm = ({ setIsFlipped }) => {
  const { loginUser } = useContext(authContext);
  const history = useHistory();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user.email) {
      return alert('Pleas enter your registered email!');
    }

    if (!user.password) {
      return alert('Pleas enter your password!');
    }

    loginUser(user);
    clearForm();
    history.goBack();
  };

  const clearForm = () =>
    setUser({
      email: '',
      password: '',
    });

  return (
    <form className='auth__form auth__form--login' onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className='socials'>
        <Link to='#!' className='social__item'>
          <i className='fab fa-facebook-f' />
        </Link>
        <Link to='#!' className='social__item'>
          <i className='fab fa-google-plus-g' />
        </Link>
      </div>
      <span>or use your email for login</span>
      <input
        type='email'
        className='input'
        name='email'
        placeholder='Email'
        value={user.email}
        onChange={onChange}
      />
      <input
        type='password'
        className='input'
        name='password'
        placeholder='Password'
        value={user.password}
        onChange={onChange}
      />

      <input type='submit' className='btn btn__primary' value='login' />

      <span className='auth__alternative'>
        Don't have an account?{' '}
        <button
          className='btn__link'
          type='button'
          onClick={() => setIsFlipped(true)}
        >
          Login here.
        </button>
      </span>
    </form>
  );
};

export default LoginForm;
