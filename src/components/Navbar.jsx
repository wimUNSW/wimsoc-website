import React from 'react'
import { navLists } from '../constants'

// const navLists = ["Home", "Events", "Sponsors", "About Us", "Contact Us"];

const Navbar = () => {
  return (
    <header className='w-full bg-black fixed top-0 left-0 right-0 z-50 py-5 sm:px-10 px-5'>
      <nav className='flex w-full px-10'>
        <img src='/assets/WIMBanner.png' alt='wim logo' className='w-45 h-8 object-contain'/>

        <div className='flex flex-1 max-sm:hidden items-center justify-end'>
          {navLists.map((nav) => (
            <div className='px-5 text-sm cursor-pointer hover:text-red-400 transition-all text-white' key={nav}>
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar