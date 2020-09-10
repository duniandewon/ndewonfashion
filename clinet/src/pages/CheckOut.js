import React, { useContext, useEffect, useState } from 'react';

import { authContext } from '../context/auth/AuthState';
import { cartContext } from '../context/cart/CartState';

import MiniCart from '../components/cart/MiniCart';
import CheckoutSections from '../components/chekcout/CheckoutSections';
import ShippingAddress from '../components/chekcout/ShippingAddress';
import PaymentOptions from '../components/chekcout/PaymentOptions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckOut = () => {
  const { loadUser } = useContext(authContext);
  const { items, getSubtotals, subtotal } = useContext(cartContext);

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    phone: '',
    city: '',
    postalCode: '',
    address: '',
  });

  const [payment, setPayment] = useState('cod');

  const placeOrder = () => console.log({ items, shippingAddress, payment });

  useEffect(() => {
    loadUser();
    getSubtotals();

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row className='my-5'>
        <Col
          xs={{ order: 'last', span: 12 }}
          lg={{ order: 'first', span: 8 }}
          className='my-5 my-lg-0'
        >
          <div className='checkout'>
            <CheckoutSections title='shipping address'>
              <ShippingAddress
                shippingAddress={shippingAddress}
                setShippingAddress={setShippingAddress}
              />
            </CheckoutSections>
            <CheckoutSections title='payment'>
              <PaymentOptions payment={payment} setPayment={setPayment} />
            </CheckoutSections>
            <Row>
              <Col xs={12} className='mt-5'>
                <button
                  className='btn btn__primary btn__block'
                  onClick={placeOrder}
                >
                  palce order
                </button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={{ order: 'first', span: 12 }} lg={{ order: 'last', span: 4 }}>
          <MiniCart items={items} subtotal={subtotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
