'use client'
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { useRef, useState } from 'react';







const Contact = () => {
  const scriptURL =
  'https://script.google.com/macros/s/AKfycbwvtpk0MvQrGDzf_KnrGE6_3ZFJPf3wUerNipusndsE1V9h-2lYpF-x8R_t0wMfPav6/exec';

  const formRef = useRef(null);
  const [formFields, setFormFields] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;



  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    });

    if (response.ok) {
      alert('Details sent successfully')
     
      console.log('Form submitted successfully');
      setFormFields({ Name: '', Email: '', Message: '' });
      formRef.current.reset(); 
     
     
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};


  return (
    <div className='flex mx-[10%] gap-6' id='Contact'>
        <div className=' w-[40%] lg:space-y-10 space-y-8'>
            <p className='lg:text-[60px] text-[20px] font-bold'>Contact Me</p>
            <div className='flex items-center lg:gap-10 gap-2 lg:text-lg text-[12px]'><FaTelegramPlane className='text-[#ff004f]' size={30}/> tillu0201@gmail.com</div>
            <div className='flex items-center lg:gap-10 gap-2 lg:text-lg text-[12px]'><FaPhoneSquareAlt className='text-[#ff004f] ' size={30}/> +91 7993291554</div>
            <div className='flex lg:gap-6 gap-2 cursor-pointer'><BsFacebook size={30} className='hover:animate-bounce hover:text-[#ff004f]'/> <FaSquareTwitter size={30} className='hover:animate-bounce hover:text-[#ff004f]'/> <LuInstagram size={30} className='hover:animate-bounce hover:text-[#ff004f]'/> <FaLinkedin size={30} className='hover:animate-bounce hover:text-[#ff004f]'/></div>
            <button className='bg-[#ff004f] lg:w-[50%] p-2 h-14 rounded-lg'><a href='/CV.pdf' download>Download CV</a></button>
            
        </div>
        <div className='w-[60%]'>
            <form className='space-y-10 ' onSubmit={handleSubmit}>
                <input type='text' placeholder='Your Name' name='Name' className='w-[100%] h-12 rounded-lg bg-[#262626] p-4'/>
                <input type='text' placeholder='Your Email' name='Email' className='w-[100%] h-12 rounded-lg bg-[#262626] p-4'/>
                <textarea type='text' placeholder='Your Message' name='Message' className='w-[100%] h-40 rounded-lg bg-[#262626] p-4'/>
                <button className='bg-[#ff004f] w-40 h-14 rounded-lg' type='submit'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}



export default Contact 