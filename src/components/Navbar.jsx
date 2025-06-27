// import React from 'react';
// import { Link } from 'react-router-dom';
// import { navLists } from '../constants';

// const Navbar = () => {
//   return (
//     <header className='w-full py-5 fixed top-0 left-0 z-50 bg-black backdrop-blur-md border-b border-gray-200'>
//       <nav className='w-full flex max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
//         <Link to='/'>
//           <img src='/assets/WIMBanner.png' alt='wim logo' className='w-45 h-8 object-contain' />
//         </Link>

//         <div className='flex flex-1 max-sm:hidden items-center justify-end'>
//           {navLists.map((nav) => (
//             <Link
//               to={nav.path}
//               key={nav.item}
//               className='px-5 text-sm cursor-pointer hover:text-red-400 transition-all text-white'
//             >
//               {nav.item}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { navLists } from '../constants';

const NavbarComponent = () => {
  return (
    <Navbar 
      shouldHideOnScroll
      className="backdrop-blur-md border-b border-gray-200 w-full py-5 fixed top-0 left-0 z-50 bg-black border-b"
      classNames={{
        base: "py-2",
        wrapper: "max-w-7xl px-6 sm:px-8 lg:px-12",
      }}
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
      
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="end"> */}
      <NavbarContent className="hidden sm:flex gap-4 absolute left-1/2 transform -translate-x-1/2" justify="center">

        {navLists.map((nav) => (
          <NavbarItem key={nav.item}>
            <Link 
              as={RouterLink}
              to={nav.path}
              className="px-5 text-lg cursor-pointer hover:text-red-400 transition-all text-white"
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