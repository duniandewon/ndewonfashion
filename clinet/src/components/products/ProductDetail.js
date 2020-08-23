import React, { useState } from 'react';

import Accordion from '../Accordion';
import CartAmountToggler from '../cart/CartAmountToggler';

const ProductDetail = ({ product }) => {
  const [chosenSize, setChosenSize] = useState('');
  const [amount, setAmount] = useState(1);

  const toggleAmount = (toggle) => {
    if (toggle === 'inc') {
      setAmount((amnt) => (amnt += 1));
    } else {
      setAmount((amnt) => (amnt -= 1));
    }
  };

  const addToCart = () => {
    if (!chosenSize) {
      return alert('Please select a size');
    }

    console.log({ ...product, amount, chosenSize });
  };

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
          <CartAmountToggler amount={amount} toggleAmount={toggleAmount} />
        </div>
        <button className='btn btn__primary my-5' onClick={addToCart}>
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
