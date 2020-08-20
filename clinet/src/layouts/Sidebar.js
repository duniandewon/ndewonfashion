import React from 'react';
import SideNav from '../components/navigations/SideNav';
import ProductFilter from '../components/products/ProductFilter';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <section className='sidebar__section'>
        <h3>category</h3>
        <SideNav />
      </section>
      <ProductFilter />
    </aside>
  );
};

export default Sidebar;
