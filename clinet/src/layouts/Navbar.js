import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import MainNav from '../components/navigations/MainNav';
import TopNav from '../components/navigations/TopNav';
import Drawer from '../components/navigations/Drawer';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className='navbar'>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
      <Container>
        <button
          className='nav__toggler d-lg-none'
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <i className='fas fa-bars'></i>
        </button>
        <MainNav />
        <div className='d-lg-none'>
          <TopNav />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
