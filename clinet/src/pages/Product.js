import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import Section from '../layouts/Section';
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
  }, [products]);

  return (
    product && (
      <Container>
        <header className='page_header my-5'>
          <Link to={`/${product.gender}/${product.category}`}>
            &#60;&#60;&#60; go back to categories
          </Link>
        </header>
        <ProductDetail product={product} />
        <Section title='you might also like'>
          <Carousel />
        </Section>
      </Container>
    )
  );
};

export default Product;
