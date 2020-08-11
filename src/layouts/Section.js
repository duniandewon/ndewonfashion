import React from 'react';
import { Container } from 'react-bootstrap';

const Section = ({ title, children }) => {
  return (
    <section className='section'>
      {title && <h2 className='section__title'>{title}</h2>}
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
