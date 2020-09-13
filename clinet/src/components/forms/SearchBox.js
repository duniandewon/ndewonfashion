import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { productContext } from '../../context/products/ProductsState';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const { products } = useContext(productContext);

  const emptySearch = () => setSearch('');

  useEffect(() => {
    let filter = [];

    if (search.length >= 3) {
      filter =
        products &&
        products.filter((product) =>
          product.name.toLowerCase().includes(search)
        );
    }
    setResults(filter);
  }, [search]);

  return (
    <div className='search'>
      <div className='search__box'>
        <input
          type='text'
          placeholder='Search...'
          name='search'
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={emptySearch}>
          <i className='fas fa-search'></i>
        </button>
      </div>
      {results && results.length > 0 && (
        <div className='search__results'>
          {results.map(({ _id, image, name, price }) => (
            <Link
              to={`/${_id}`}
              className='search__item'
              key={_id}
              onClick={emptySearch}
            >
              <div className='search__image'>
                <img src={image[0]} alt={name} />
              </div>
              <div className='search__name'>
                <h3>{name}</h3>
              </div>
              <div className='search__price'>
                <h3>Rp {price}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
