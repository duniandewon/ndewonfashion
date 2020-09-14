import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';
import { cartContext } from '../context/cart/CartState';

import Section from '../layouts/Section';
import PageHeader from '../layouts/PageHeader';
import Carousel from '../components/slides/Carousel';
import ProductDetail from '../components/products/ProductDetail';

const Product = () => {
  const { prod_id } = useParams();

  const { loadUser } = useContext(authContext);
  const { products, getProducts } = useContext(productContext);
  const { items, getSubtotals } = useContext(cartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadUser();
    getProducts();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getSubtotals();

    // eslint-disable-next-line
  }, [items]);

  useEffect(() => {
    if (products) {
      const prod = products.find((product) => product._id === prod_id);

      setProduct(prod);
    }
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
