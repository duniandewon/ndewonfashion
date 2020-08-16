import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { authContext } from '../../context/auth/AuthState';

const RegisterForm = ({ setIsFlipped }) => {
  const { registerUser } = useContext(authContext);
  const history = useHistory();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const { name, email, password, confPassword } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Please enter a name!');
    }

    if (!email) {
      return alert('Please enter an email!');
    }

    if (!password) {
      return alert('Please enter a password!');
    }

    if (!confPassword) {
      return alert('Please confirm your password!');
    }

    if (password !== confPassword) {
      return alert("Passwords don't match");
    }

    registerUser(user);
    clearForm();
    history.push('/confirm-email');
  };

  const clearForm = () =>
    setUser({
      name: '',
      email: '',
      password: '',
      confPassword: '',
    });
  return (
    <form className='auth__form auth__form--register' onSubmit={onSubmit}>
      <h2>Create account</h2>
      <div className='socials'>
        <Link to='#!' className='social__item'>
          <i className='fab fa-facebook-f' />
        </Link>
        <Link to='#!' className='social__item'>
          <i className='fab fa-google-plus-g' />
        </Link>
      </div>
      <span>or use your email for registration</span>
      <input
        type='text'
        className='input'
        name='name'
        placeholder='Name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        className='input'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='password'
        className='input'
        name='password'
        placeholder='Password'
        value={password}
        onChange={onChange}
      />
      <input
        type='password'
        className='input'
        name='confPassword'
        placeholder='Confirm password'
        value={confPassword}
        onChange={onChange}
      />

      <input type='submit' className='btn btn__primary' value='Register' />

      <span className='auth__alternative'>
        Already have an account?{' '}
        <button
          className='btn__link'
          type='button'
          onClick={() => setIsFlipped(false)}
        >
          Register here.
        </button>
      </span>
    </form>
  );
};

export default RegisterForm;
