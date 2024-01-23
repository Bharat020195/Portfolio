"use client"
import React from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';




const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', });
    }
  };
 
  return (
    <div className=' relative py-[10px] flex justify-between lg:mx-[10%] mx-4 my-4 lg:w-[80%] w-[100%]'>
      <Image src={Logo} className='lg:w-[140px] w-[60px]' />
      <ul className=' flex items-center lg:space-x-14 space-x-5 lg:text-[18px] text-[10px] relative lg:ml-0 ml-4'>
        <li className='relative group'>
          <a href='#home' onClick={() => scrollToSection('home')}>Home</a>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <a href='#About' onClick={() => scrollToSection('About')}>About</a>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <a href='#Services' onClick={() => scrollToSection('Services')}>Services</a>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <a href='#Work' onClick={() => scrollToSection('Work')}>Portfolio</a>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <a href='#Contact' onClick={() => scrollToSection('Contact')}>Contact</a>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
      </ul>
   
    </div>
  );
};

export default Header;
