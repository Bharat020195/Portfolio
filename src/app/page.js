import React from 'react';
import Header from '../Pages/Header'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Work from '@/Pages/Work';
import Contact from '@/Pages/Contact';
import Footer from '../Pages/Footer'

const Page = () => {
  return (
    <div id='home'>
     
      <div style={{ backgroundImage: `url('/background.png')`, backgroundSize: 'cover',}} className='lg:h-screen lg:w-auto  w-[80%] h-80 bg-fixed'>
      <Header/>
       <div className='pt-[20%] px-[10%]'>
        <p className='lg:text-[30px] text-[10px]'>Web Developer</p>
        <span className='lg:text-[60px] text-[20px]'>Hi, This is <span className='text-[#ff004f]'>Bharat</span></span>
        </div>
      </div>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Page;
