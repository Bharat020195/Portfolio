'use client'
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';






const Contact = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some(value => !value)) {
      alert('Please fill in all required fields.');
      return;
    }


    emailjs.sendForm('service_4qz4jej', 'template_pwjf3er', form.current, 'fAyqMNCo_nnEZc7qV')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Thank you for details we will reach you soon!')
          setIsSubmitted(true);
        
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <div className='flex mx-[10%] gap-6' id='Contact'>
        <div className=' w-[40%] lg:space-y-10 space-y-8'>
            <p className='lg:text-[60px] text-[20px] font-bold'>Contact Me</p>
            <div className='flex items-center lg:gap-10 gap-2 lg:text-lg text-[12px]'><FaTelegramPlane className='text-[#ff004f]' size={30}/> Bharat.nanavathula@gmail.com</div>
            <div className='flex items-center lg:gap-10 gap-2 lg:text-lg text-[12px]'><FaPhoneSquareAlt className='text-[#ff004f] ' size={30}/> +91 7993291554</div>
            <div className='flex lg:gap-6 gap-2 cursor-pointer'>
              <Link href='https://www.facebook.com/bharath.kumar.3950/'><BsFacebook size={30} className='hover:animate-bounce hover:text-[#ff004f]'/></Link> 
               <Link href='https://twitter.com/BharatK00479148'><FaSquareTwitter size={30} className='hover:animate-bounce hover:text-[#ff004f]'/></Link>
                <Link href='https://www.instagram.com/bharat020195/'><LuInstagram size={30} className='hover:animate-bounce hover:text-[#ff004f]'/></Link>
                <Link href='https://www.linkedin.com/in/bharat-kumar-8a87b4169/'> <FaLinkedin size={30} className='hover:animate-bounce hover:text-[#ff004f]'/></Link>
                </div>
                <button className='bg-[#ff004f] lg:w-[50%] p-2 h-14 rounded-lg' onClick={() => window.open('/CV.pdf', '_blank')}>
  Download CV
</button>

            
        </div>
        <div className='w-[60%]'>
            <form className='space-y-10 ' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Your Name' name='Name' className='w-[100%] h-12 rounded-lg bg-[#262626] p-4' required />
            <input type='text' placeholder='Your Email' name='Email' className='w-[100%] h-12 rounded-lg bg-[#262626] p-4' required />
            <textarea type='text' placeholder='Your Message' name='Message' className='w-[100%] h-40 rounded-lg bg-[#262626] p-4' required />
 
                <button className='bg-[#ff004f] w-40 h-14 rounded-lg' type='submit'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}



export default Contact 