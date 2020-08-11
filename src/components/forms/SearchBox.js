import React, { useState } from 'react';

const SearchBox = () => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Search...'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
