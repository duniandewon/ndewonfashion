import React from 'react';

import Accordion from '../Accordion';

const ProductDetail = ({ product }) => {
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
                <input type='radio' name='sizes' id={size} />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>
        </div>
        <div className='product_amount'>
          <p>amount</p>
          <div className='cart__amount-toggler'>
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
        </div>
        <button className='btn btn__primary my-5'>Add to cart</button>
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
