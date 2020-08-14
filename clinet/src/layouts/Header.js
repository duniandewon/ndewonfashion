import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBox from '../components/forms/SearchBox';
import TopNav from '../components/navigations/TopNav';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <Col sm={12} lg='auto' className='d-lg-flex align-items-lg-center'>
            <Link to='/'>
              <h1 className='site-logo'>ndewonfashion</h1>
            </Link>
          </Col>
          <Col sm={12} lg={8}>
            <SearchBox />
          </Col>
          <Col
            sm={12}
            lg='auto'
            className='d-none d-lg-flex align-items-lg-center'
          >
            <TopNav />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
