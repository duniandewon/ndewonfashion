import React, { useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { authContext } from '../context/auth/AuthState';

import Container from 'react-bootstrap/Container';

const ConfirmEmail = () => {
  const { loadUser, user, isAuthenticated } = useContext(authContext);

  const { push } = useHistory();

  useEffect(() => {
    loadUser();

    if (user && isAuthenticated) {
      push('/');
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className='confirm-email'>
        <h1>This is where you should've confirmed your email</h1>
        <p>
          You're seeing this page because you just registered in our website,
          and this is the place where we should say:{' '}
          <span>
            We have sent you and email and please click the link in the email to
            activate your account.
          </span>
        </p>
        <p>
          But we don't have that feature yet so you can just{' '}
          <Link to='/login'>login</Link>.
        </p>
      </div>
    </Container>
  );
};

export default ConfirmEmail;
