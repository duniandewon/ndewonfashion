import React, { Fragment, Children } from 'react';

const Accordion = ({ titles, children, classes }) => {
  const AccordionChildren = Children.toArray(children);
  return (
    <Fragment>
      {titles.map((title, index) => (
        <div className='accordion'>
          <input type='checkbox' name='accordion' id={title} />
          <label className={`accordion__title ${classes}`} htmlFor={title}>
            {title}
          </label>
          <div className='accordion__content'>{AccordionChildren[index]}</div>
        </div>
      ))}
    </Fragment>
  );
};

export default Accordion;
