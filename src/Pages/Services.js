import React from 'react'
import { FaCode } from "react-icons/fa";
import { RiAppStoreLine } from "react-icons/ri";
import { FaCropSimple } from "react-icons/fa6";
import Link from 'next/link';

const Services = () => {
  return (
    <div className='lg:mx-[10%] mx-10 space-y-10 ' id='Services'>
        <div className='lg:text-[55px] text-[20px] font-bold'>My Services</div>
        <div className='grid grid-cols-3 grid-rows-1 lg:gap-10 gap-2  '>
            <div className='space-y-4 bg-[#262626] lg:p-10 p-4 rounded-lg hover:bg-[#ff004f] hover:-translate-y-6 duration-[0.5s] '>
                <p><FaCode size={60}/></p>
                <p className='lg:text-[30px] text-[10px] '>Frontend Development</p>
                <p className='lg:text-[13px] text-[8px] '>Make the website reactive in order to acheive the desired functionality</p>
                </div>
                <div className='space-y-4 bg-[#262626] lg:p-10 p-4 rounded-lg hover:bg-[#ff004f] hover:-translate-y-6 duration-[0.5s]'>
                <p><FaCropSimple size={60}/></p>
                <p className='lg:text-[30px] text-[10px] '>Website <br/> Design</p>
                <p className='lg:text-[13px] text-[8px]'>Make the website reactive and user friendly to grab the attention of viewers</p>
                </div>
                <div className='space-y-4 bg-[#262626] lg:p-10 p-4 rounded-lg hover:bg-[#ff004f] hover:-translate-y-6 duration-[0.5s]'>
                <p><FaCode size={60}/></p>
                <p className='lg:text-[30px] text-[10px] '>Backend Development</p>
                <p className='lg:text-[13px] text-[8px] '>Add functionality to the website and work on data handling</p>
                </div>
        </div>
    </div>
  )
}

export default Services