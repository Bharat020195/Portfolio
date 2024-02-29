"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Work1 from '../../public/Work1.png'
import Work2 from '../../public/work-2.png'
import Work3 from '../../public/work-3.png'
import Work4 from '../../public/Work-4.png'
import Work5 from '../../public/Work-5.png'
import Work6 from '../../public/Work-6.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link'

const Work = () => {
  const[more, Setmore] = useState();


  const handleClick = () =>{

    Setmore(!more)
  }
  return (
    <div className='lg:mx-[10%] mx-4 my-20 space-y-10 ' id='Work'>
         <div className='lg:text-[55px] text-[20px] font-bold'>My Work</div>
         <div className='grid grid-cols-3 grid-rows-1 lg:gap-10 gap-4  '>
            <div className='relative overflow-hidden'>
                <Image
                 src={Work2}
                 alt='No Image Found' className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
                <div className=' absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px] text-white'>
                    <p className='font-semibold lg:mb-[20px] lg:text-lg text-[10px] '>Food Blog Website</p>
                    <p className='lg:text-[14px] text-[6px]'>A Food Blog where the detailed information of the recipes are provided</p>
                    <Link href='https://github.com/Bharat020195/Bobby-Blog' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full' ><FaExternalLinkAlt/></Link>
                </div>
            </div>
            <div className='relative overflow-hidden'>
            <Image
             src={Work1}
             alt='No Image Found'
             className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
            <div className='absolute w-[100%] h-[0%] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px]'>
                    <p  className='font-semibold lg:mb-[20px] lg:text-lg text-[10px]'>Food Blog Website</p>
                    <p className='lg:text-[14px] text-[6px]'>A Food Blog where the detailed information of the recipes are provided</p>
                    <Link  href='https://github.com/Bharat020195/Hari-Blog' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full'><FaExternalLinkAlt/></Link>
                </div>
            </div>
            <div className='relative overflow-hidden'>
            <Image
             src={Work5}
             alt='No Image Found'
             className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
            <div className='absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0  flex flex-col text-center items-center justify-center px-[40px]'>
                    <p  className='font-semibold lg:mb-[20px] lg:text-lg text-[10px]'>Lingeshwara Tiles</p>
                    <p className='lg:text-[14px] text-[6px]'>A website where customers can look and select from the Tiles they have</p>
                    <Link href='https://github.com/Bharat020195/Lingeshwara' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full'><FaExternalLinkAlt/></Link>
                </div>
            </div>
            
            
         </div>
         {more && (
          <div className=' grid grid-cols-3 grid-rows-1 lg:gap-10 gap-4'>
          <div className='relative overflow-hidden'>
          <Image
           src={Work3}
           alt='No Image Found' className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
          <div className=' absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px] text-white'>
              <p className='font-semibold lg:mb-[20px] lg:text-lg text-[10px] '>Portfolio Website</p>
              <p className='lg:text-[14px] text-[6px]'>A Portfolio Website where clients can have a glance about me.</p>
              <Link href='https://github.com/Bharat020195/Portfolio' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full' ><FaExternalLinkAlt/></Link>
          </div>
          </div>
          <div className='relative overflow-hidden'>
          <Image
           src={Work4}
           alt='No Image Found' className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
          <div className=' absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px] text-white'>
              <p className='font-semibold lg:mb-[20px] lg:text-lg text-[10px] '>Amazon Clone</p>
              <p className='lg:text-[14px] text-[6px]'>A clone website of Amazon where everything looks same as Amazon</p>
              <Link href='https://github.com/Bharat020195/Amazon' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full' ><FaExternalLinkAlt/></Link>
          </div>
          </div>

          <div className='relative overflow-hidden'>
            <Image
             src={Work6}
             alt='No Image Found'
             className='rounded-xl block w-[100%] h-[100%] hover:scale-125 duration-[0.5s]' />
            <div className='absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0  flex flex-col text-center items-center justify-center px-[40px]'>
                    <p  className='font-semibold lg:mb-[20px] lg:text-lg text-[10px]'>Myntra Clone</p>
                    <p className='lg:text-[14px] text-[6px]'>A clone website of Myntra where everything looks same as Myntra</p>
                    <Link href='https://github.com/Bharat020195/Myntra-clone' target='_blank' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full'><FaExternalLinkAlt/></Link>
                </div>
            </div>

   </div>
          
          

         )}
         <div  className='flex justify-center items-center text-center w-[100%] '>
         <button className='border-2 border-[#ff004f] rounded-[6px] py-[14px] my-[50px] px-[50px] hover:bg-[#ff004f] duration-[0.5s] text-12px' onClick={handleClick}>See More
         </button>
         </div>
    </div>
  )
}

export default Work