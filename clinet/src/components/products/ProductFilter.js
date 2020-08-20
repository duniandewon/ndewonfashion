import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProductFilter = () => {
  const [price, setPrice] = useState(350);

  const history = useHistory();

  const onChange = (e) => {
    setPrice(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(history.location.pathname + `?price=${price}`);
  };

  return (
    <>
      <form className='sidebar__section' onSubmit={onSubmit}>
        <h3>price</h3>
        <div className='product-filter__price'>
          <input
            type='range'
            value={price}
            min='10'
            max='350'
            onChange={onChange}
          />
          <span>${price}</span>
        </div>

        <button className='btn btn__primary mt-5'>filter</button>
      </form>
    </>
  );
};

export default ProductFilter;
