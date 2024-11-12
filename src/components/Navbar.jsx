import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
        const [isOpen,setIsOpen]=useState(false)
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Plan', link: '#price' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <div className='w-full py-3 sm:px-6 md:px-16 lg:px-24 px-5 bg-[#1d1d1d] flex items-center justify-between relative '>
      <div className='w-14 h-14 rounded-full overflow-hidden'>
        <img src='https://i.pinimg.com/474x/fc/78/15/fc7815fd58a9d67d1bc5b858b4c7ccf6.jpg' alt='Logo' className='w-full h-full' />
      </div>
     {isOpen ? ( <div className='items-center absolute z-50 top-20 left-0 space-y-5 w-full bg-gray-800 flex flex-col transition-all'>
        {navItems.map((item, index) => (
          <a href={item.link} key={index} to={item.link} onClick={()=>setIsOpen(false)}  className='text-white hover:bg-gray-600 w-full text-center py-2  active:scale-90'>
            {item.name}
          </a>
        ))}
        <Button/>
      </div>):( <div className=' space-x-6 items-center hidden sm:flex'>
        {navItems.map((item, index) => (
          <a href={item.link} key={index} onClick={()=>setIsOpen(false)}  className='text-white hover:text-gray-400'>
            {item.name}
          </a>
        ))}
        <Button/>
      </div>)}
      <i onClick={()=>setIsOpen(!isOpen)} className="fa-solid fa-bars text-white sm:hidden text-2xl cursor-pointer active:scale-90"></i>
    </div>
  );
};

export default Navbar;
