import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import ProductCategory from './ProductCategory';

import ProductList from '../components/products/ProductList';

import Sidebar from '../layouts/Sidebar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Shop = () => {
  const { loadUser } = useContext(authContext);
  const { getProducts, products } = useContext(productContext);
  const { path } = useRouteMatch();
  const { search } = useLocation();

  const [filtered, setFiltered] = useState([]);

  const prodGender = path.slice(1).split('/')[0];
  const prodList =
    products && products.filter((product) => product.gender === prodGender);

  const filterProducts = () => {
    const searchParams = new URLSearchParams(search);
    const price = searchParams.get('price');

    if (products) {
      const filtered = products.filter(
        (product) =>
          product.gender === prodGender && parseFloat(product.price) <= price
      );

      setFiltered(filtered);
    }
  };

  useEffect(() => {
    loadUser();
    getProducts();
    filterProducts();

    // eslint-disable-next-line
  }, [search]);

  return (
    <Container fluid>
      <Row>
        <Col
          xs={{ order: 'last' }}
          lg={{ order: 'first', span: '3' }}
          className='py-5'
        >
          <Sidebar />
        </Col>
        <Col lg={9} className='py-5'>
          <Switch>
            <Route exact path={`${path}`}>
              <ProductList
                products={filtered.length > 0 ? filtered : prodList}
              />
            </Route>
            <Route path={`${path}/:prod_category`}>
              <ProductCategory
                products={filtered.length > 0 ? filtered : products}
              />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
