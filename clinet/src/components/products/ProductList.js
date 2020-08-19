import React from 'react';

import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products &&
        products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
    </div>
  );
};

export default ProductList;
