import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { productContext } from '../../context/products/ProductsState';

import ProductList from './ProductList';

const ProdCategory = () => {
  const { products } = useContext(productContext);
  const { prod_category } = useParams();

  const prodList = products.filter(
    (product) => product.category === prod_category
  );

  return <ProductList products={prodList} />;
};

export default ProdCategory;
