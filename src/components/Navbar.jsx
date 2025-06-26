import React from 'react';
import { Link } from 'react-router-dom';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 fixed top-0 left-0 z-50 bg-black backdrop-blur-md border-b border-gray-200'>
      <nav className='w-full flex max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <img src='/assets/WIMBanner.png' alt='wim logo' className='w-45 h-8 object-contain' />

        <div className='flex flex-1 max-sm:hidden items-center justify-end'>
          {navLists.map((nav) => (
            <Link
              to={nav.path}
              key={nav.item}
              className='px-5 text-sm cursor-pointer hover:text-red-400 transition-all text-white'
            >
              {nav.item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
