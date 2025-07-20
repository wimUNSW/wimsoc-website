import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { navLists } from '../constants';

const NavbarComponent = () => {
  return (
    <nav className="w-full py-5 fixed top-0 left-0 z-50 bg-black border-b">
      <div className="flex items-center justify-between px-4">
        <div>
          <RouterLink to='/'>
            <img 
              src='/assets/WIMBanner.png' 
              alt='wim logo' 
              className='w-45 h-8 object-contain' 
            />
          </RouterLink>
        </div>
        
        <div className="hidden sm:flex gap-4">
          {navLists.map((nav) => (
            <RouterLink
              key={nav.item}
              to={nav.path}
              className="px-5 text-md cursor-pointer hover:text-red-400 transition-all text-white"
            >
              {nav.item}
            </RouterLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;