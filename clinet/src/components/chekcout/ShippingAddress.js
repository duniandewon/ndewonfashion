import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShippingAddress = ({ shippingAddress, setShippingAddress }) => {
  const { name, phone, city, postCode, address } = shippingAddress;

  const onChange = (e) =>
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });

  return (
    <div className='checkout__delivery-form'>
      <Row>
        <Col xs={12} lg={6}>
          <input
            type='text'
            name='name'
            id='name'
            className='input'
            placeholder='Name'
            value={name}
            onChange={onChange}
          />
        </Col>
        <Col xs={12} lg={6}>
          <input
            type='number'
            name='phone'
            id='phone'
            className='input'
            placeholder='Phone'
            value={phone}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8}>
          <input
            type='text'
            name='city'
            id='city'
            className='input'
            placeholder='City'
            value={city}
            onChange={onChange}
          />
        </Col>
        <Col xs={12} lg={4}>
          <input
            type='number'
            name='postCode'
            id='postCode'
            className='input'
            placeholder='Post code'
            value={postCode}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <input
            type='text'
            name='address'
            id='address'
            className='input'
            placeholder='Address'
            value={address}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ShippingAddress;
