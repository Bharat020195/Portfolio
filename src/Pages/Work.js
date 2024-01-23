import React from 'react'
import Image from 'next/image'
import Work1 from '../../public/work-1.png'
import Work2 from '../../public/work-2.png'
import Work3 from '../../public/work-3.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <div className='lg:mx-[10%] mx-4 my-20 space-y-10 ' id='Work'>
         <div className='lg:text-[55px] text-[20px] font-bold'>My Work</div>
         <div className='grid grid-cols-3 grid-rows-1 lg:gap-10 gap-4  '>
            <div className='relative overflow-hidden'>
                <Image src={Work1} className='rounded-xl block w-[100%] hover:scale-125 duration-[0.5s]' />
                <div className=' absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px] text-white'>
                    <p className='font-semibold lg:mb-[20px] lg:text-lg text-[10px] '>Social Media App</p>
                    <p className='lg:text-[14px] text-[6px]'>The App connects you to the talented people around the world. Dowload it from Playstore</p>
                    <a href='' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full' ><FaExternalLinkAlt/></a>
                </div>
            </div>
            <div className='relative overflow-hidden'>
            <Image src={Work2} className='rounded-xl block w-[100%] hover:scale-125 duration-[0.5s]' />
            <div className='absolute w-[100%] h-[0%] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0 flex flex-col text-center items-center justify-center px-[40px]'>
                    <p  className='font-semibold lg:mb-[20px] lg:text-lg text-[10px]'>Music App</p>
                    <p className='lg:text-[14px] text-[6px]'>The App plays songs from the album you choose from. Dowload it from Playstore</p>
                    <a  href='' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full'><FaExternalLinkAlt/></a>
                </div>
            </div>
            <div className='relative overflow-hidden'>
            <Image src={Work3} className='rounded-xl block w-[100%] hover:scale-125 duration-[0.5s]' />
            <div className='absolute w-[100%] h-[0] hover:h-[100%] duration-[0.5s] bg-gradient-to-b from-black/60 to-[#ff004f] rounded-xl left-0 bottom-0  flex flex-col text-center items-center justify-center px-[40px]'>
                    <p  className='font-semibold lg:mb-[20px] lg:text-lg text-[10px]'>Online Shopping App</p>
                    <p className='lg:text-[14px] text-[6px]'>This App helps in online shopping from the variety products added to it . Dowload it from Playstore</p>
                    <a href='' className='lg:mt-[20px] mt-2 text-center text-[#ff004f] lg:text-[18px] lg:p-5 p-2 bg-white lg:w-[60px] lg:h-[60px] rounded-full'><FaExternalLinkAlt/></a>
                </div>
               
            </div>
            
         </div>
         <div  className='flex justify-center items-center text-center w-[100%] '>
         <button className='border-2 border-[#ff004f] rounded-[6px] py-[14px] my-[50px] px-[50px] hover:bg-[#ff004f] duration-[0.5s] text-12px'>See More</button>
         </div>
    </div>
  )
}

export default Work