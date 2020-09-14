import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col xs={12} lg={5} className='about mb-5 mb-lg-0'>
            <h3>NDEWONFASHION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              deleniti tenetur temporibus impedit veritatis placeat vitae
              tempora sit facere delectus.
            </p>
            <div className='social-links'>
              <a href='https://www.facebook.com' target='_blank'>
                <i className='fab fa-facebook-square'></i>
              </a>
              <a href='https://www.instagram.com' target='_blank'>
                <i className='fab fa-instagram-square'></i>
              </a>
            </div>
          </Col>
          <Col xs={12} lg={3} className='links'>
            <h3>Links</h3>
            <ul>
              <li>
                <Link to='/women'>women</Link>
              </li>
              <li>
                <Link to='/men'>men</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
              <li>
                <Link to='/blog'>blog</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4} className='location'>
            <h3>Location</h3>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
