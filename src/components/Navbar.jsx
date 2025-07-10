import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { navLists } from '../constants';

const NavbarComponent = () => {
  return (
    <Navbar 
      shouldHideOnScroll
      className="w-full py-5 fixed top-0 left-0 z-50 bg-black border-b"
    >
      <NavbarBrand>
        <RouterLink to='/'>
          <img 
            src='/assets/WIMBanner.png' 
            alt='wim logo' 
            className='w-45 h-8 object-contain' 
          />
        </RouterLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 absolute left-1/2 transform -translate-x-1/2" justify="end">

        {navLists.map((nav) => (
          <NavbarItem key={nav.item}>
            <Link 
              as={RouterLink}
              to={nav.path}
              className="px-5 text-md cursor-pointer hover:text-red-400 transition-all text-white"
            >
              {nav.item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;