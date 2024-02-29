"use client"
import React from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';



const Header2 = () => {
 
  return (
    <div className=' relative py-[10px] flex justify-between lg:mx-[10%] mx-4 my-4 lg:w-[80%] w-[100%]'>
      <Image src={Logo}
      alt='No Image found' className='lg:w-[250px] w-[60px]' />
      <ul className=' flex items-center lg:space-x-14 space-x-5 lg:text-[18px] text-[10px] relative lg:ml-0 ml-4 cursor-pointer'>
        <li className='relative group'>
         <Link href='/ '>Home</Link>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <Link href='/About'>About</Link>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <Link href='/Services' >Services</Link>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <Link href='/Work' >Portfolio</Link>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
        <li className='relative group'>
          <Link href='/Contact'>Contact</Link>
          <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-[0.5s]'></div>
        </li>
      </ul>
   
    </div>
  );
};

export default Header2;
