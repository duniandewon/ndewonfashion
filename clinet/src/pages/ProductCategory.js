import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import ProductList from '../components/products/ProductList';

const ProdCategory = () => {
  const { loadUser } = useContext(authContext);
  const { products, getProducts } = useContext(productContext);

  const { prod_category } = useParams();

  const prodList =
    products &&
    products.filter((product) => product.category === prod_category);

  useEffect(() => {
    loadUser();
    getProducts();
    // eslint-disable-next-line
  }, []);

  return <ProductList products={prodList} />;
};

export default ProdCategory;
