import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../components/products/ProductList';

const ProdCategory = ({ products }) => {
  const { prod_category } = useParams();

  const prodList =
    products &&
    products.filter((product) => product.category === prod_category);

  return <ProductList products={prodList} />;
};

export default ProdCategory;
