import React, { useState, useContext, useEffect } from 'react';

import { cartContext } from '../../context/cart/CartState';

import Accordion from '../Accordion';
import CartAmountToggler from '../cart/CartAmountToggler';

const ProductDetail = ({ product }) => {
  const [chosenSize, setChosenSize] = useState('');
  const [count, setCount] = useState(1);

  const { items, addToCart, toggleAmount, getSubtotals } = useContext(
    cartContext
  );

  const ToggleCount = (e) => {
    if (e.target.textContent === '-' && count > 1) {
      setCount((count) => (count -= 1));
    }

    if (e.target.textContent === '+') {
      setCount((count) => (count += 1));
    }
  };

  const onClick = () => {
    const inCart = items.find(
      (item) => item._id === product._id && item.chosenSize === chosenSize
    );

    if (!chosenSize) {
      return alert('Please select a size');
    }

    if (inCart) {
      return toggleAmount({ ...product, count, chosenSize });
    }

    return addToCart({ ...product, count, chosenSize });
  };

  useEffect(() => {
    getSubtotals();
  }, [items]);

  return (
    <main className='page__main mb-5'>
      <div className='page__main--left'>
        <div className='product__image'>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className='page__main--right'>
        <h2 className='product__name'>{product.name}</h2>
        <h2 className='product__price'>${product.price}</h2>
        <div className='product__choose-sizes'>
          <span>sizes:</span>
          <div className='product__sizes'>
            {product.sizes.split(',').map((size) => (
              <div className='product__size' key={size}>
                <input
                  type='radio'
                  name='sizes'
                  value={size}
                  id={size}
                  onChange={(e) => setChosenSize(size)}
                />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>
        </div>
        <div className='product__amount'>
          <span>amount:</span>
          <CartAmountToggler amount={count} toggleAmount={ToggleCount} />
        </div>
        <button className='btn btn__primary my-5' onClick={onClick}>
          Add to cart
        </button>
        <Accordion
          classes='accordion__title--border-top'
          titles={['information', 'care details', 'shipping & returns']}
        >
          <p>{product.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            doloremque assumenda tempora accusamus ex tempore nihil aliquam
            soluta magni culpa error maiores quae aut repellat, laudantium ad
            beatae commodi quod?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            doloremque assumenda tempora accusamus ex tempore nihil aliquam
            soluta magni culpa error maiores quae aut repellat, laudantium ad
            beatae commodi quod?
          </p>
        </Accordion>
      </div>
    </main>
  );
};

export default ProductDetail;
