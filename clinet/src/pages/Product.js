import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import Section from '../layouts/Section';
import PageHeader from '../layouts/PageHeader';
import Carousel from '../components/slides/Carousel';

import ProductDetail from '../components/products/ProductDetail';

const Product = () => {
  const { prod_id } = useParams();

  const { loadUser } = useContext(authContext);
  const { products, product, getProducts, getProduct } = useContext(
    productContext
  );

  useEffect(() => {
    loadUser();
    getProducts();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (products) {
      getProduct(prod_id);
    }

    // eslint-disable-next-line
  }, [products, prod_id]);

  return (
    product && (
      <Container>
        <PageHeader />
        <ProductDetail product={product} />
        <Section title='you might also like'>
          <Carousel />
        </Section>
      </Container>
    )
  );
};

export default Product;
