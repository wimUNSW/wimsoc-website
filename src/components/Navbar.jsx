import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { navLists } from '../constants';


const NavbarComponent = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full py-5 fixed top-0 left-0 z-50 bg-black border-b">
      <div className="flex items-center justify-between px-4">
        <div>
          <RouterLink to='/'
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo(0, 0);
              }
            }}>
            <img 
              src='/assets/WIMBanner.png' 
              alt='wim logo' 
              className='w-45 h-8 object-contain' 
            />
          </RouterLink>
        </div>
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className="hidden sm:flex gap-4">
          {navLists.map((nav) => {
            const isActive = location.pathname === nav.path;

            return (
              <RouterLink
                key={nav.item}
                to={nav.path}
                onClick={(e) => {
                  if (window.location.pathname === nav.path) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`px-5 text-md cursor-pointer transition-all ${
                  isActive ? "text-red-400" : "text-white hover:text-red-400"
                }`}
              >
              {nav.item}
              </RouterLink>
            );
          })}
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-black flex flex-col items-center gap-4 py-4">
            {navLists.map((nav) => (
              <RouterLink
                key={nav.item}
                to={nav.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-red-400"
              >
                {nav.item}
              </RouterLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;