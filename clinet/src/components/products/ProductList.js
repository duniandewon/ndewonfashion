import React, { useContext } from 'react';
import { productContext } from '../../context/products/ProductsState';

import Card from '../Card';

const ProductList = () => {
  const { products } = useContext(productContext);
  return (
    <div className='product-list'>
      {products &&
        products.map(({ image, name, price }) => (
          <Card img={image[0]} title={name} price={price} />
        ))}
    </div>
  );
};

export default ProductList;
