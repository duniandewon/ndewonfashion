import React, { useContext } from 'react';
import { authContext } from '../context/auth/AuthState';

const LoadingSpinner = () => {
  const { user, loading } = useContext(authContext);
  return (
    !user &&
    loading && (
      <h1 className='loading-spinner'>
        Bapak bangun melihat ibu mencuci terong.
      </h1>
    )
  );
};

export default LoadingSpinner;
