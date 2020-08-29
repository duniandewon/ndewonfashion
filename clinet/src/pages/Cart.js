import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';
import { cartContext } from '../context/cart/CartState';

import getRandomProducts from '../utils/getRandomProducts';

import Section from '../layouts/Section';
import ProductList from '../components/products/ProductList';

import CartTable from '../components/cart/CartTable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {
  const { loadUser, user } = useContext(authContext);
  const { getProducts, products } = useContext(productContext);
  const { items, getSubtotals, subtotal } = useContext(cartContext);

  useEffect(() => {
    loadUser();
    getProducts();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getSubtotals();

    // eslint-disable-next-line
  }, [items]);

  return (
    <Container className='mt-5'>
      <Row className='my-5'>
        {items.length > 0 ? (
          <Fragment>
            <Col xs={12} lg={8}>
              <div className='cart-container'>
                <CartTable items={items} />
                <div className='cart__footer'>
                  <span>subtotal</span> ${subtotal}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Link
                to={user ? '/checkout' : '/login'}
                className='btn btn__primary btn__block my-5 my-lg-0'
              >
                {user ? 'check out' : 'login'}
              </Link>
              <Link to='/' className='btn btn__secondary btn__block my-5'>
                continue shopping
              </Link>
            </Col>
          </Fragment>
        ) : (
          <Col>
            <h1 className='cart__empty'>
              Your cart is empty. <Link to='/'>Start shopping!</Link>
            </h1>
          </Col>
        )}
      </Row>
      <Row className='my-5'>
        <Col>
          <Section title='you might also like'>
            <ProductList
              products={products && getRandomProducts(products, 4)}
            />
          </Section>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
