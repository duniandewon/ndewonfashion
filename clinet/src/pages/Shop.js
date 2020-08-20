import React, { useContext, useEffect } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { authContext } from '../context/auth/AuthState';
import { productContext } from '../context/products/ProductsState';

import ProductList from '../components/products/ProductList';
import ProductCategory from '../components/products/ProductCategory';

import Sidebar from '../layouts/Sidebar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Shop = () => {
  const { loadUser } = useContext(authContext);
  const { getProducts, products } = useContext(productContext);
  let { path } = useRouteMatch();

  const prodGender = path.split('/')[1];
  const prodList =
    products && products.filter((product) => product.gender === prodGender);

  useEffect(() => {
    loadUser();
    getProducts();

    // eslint-disable-next-line
  }, []);

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
              <ProductList products={prodList} />
            </Route>
            <Route path={`${path}/:prod_category`}>
              <ProductCategory />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
