'use client'
import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Aboutimage from "../../public/user.jpg";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [section1Visible, setSection1Visible] = useState(true);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'skills') {
      setSection1Visible(true);
      setSection2Visible(false);
      setSection3Visible(false);
    } else if (tab === 'experience') {
      setSection1Visible(false);
      setSection2Visible(true);
      setSection3Visible(false);
    } else if (tab === 'education') {
      setSection1Visible(false);
      setSection2Visible(false);
      setSection3Visible(true);
    }
  };

  return (
    <div className="Grid Grid-cols-2 flex lg:mx-[10%] mx-4 my-[8%] justify-between" id='About'>
      <div className="w-[35%]">
        <Image src={Aboutimage}
        alt="No Image Founc" className="w-full rounded-lg" />
      </div>
      <div className="w-[60%] ">
        <p className="lg:text-[60px] text-[20px] font-bold">About Me</p>
        <p className="lg:text-lg text-[10px] pr-10">
          Hi, this is Bharat Kumar. I am an enthusiastic developer always ready to
          handle new challenges. The main agenda of my work would be clean and
          efficient work and to deliver the task in the given time frame
        </p>
        <ul className="flex mt-[20px] mb-[40px]">
          <li className={`relative group lg:mr-[50px] mr-[20px] ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => handleTabClick('skills')}>
            <span className="lg:text-[18px] text-[10px] cursor-pointer">Skills</span>
            {activeTab === 'skills' && <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform transition-transform scale-x-50 '></div>}
          </li>

          <li className={`relative group lg:mr-[50px] mr-[20px] ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => handleTabClick('experience')}>
            <span className="lg:text-[18px] text-[10px] cursor-pointer">Experience</span>
            {activeTab === 'experience' && <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform transition-transform scale-x-50 '></div>}
          </li>

          <li className={`relative group ${activeTab === 'education' ? 'active' : ''}`} onClick={() => handleTabClick('education')}>
            <span className="lg:text-[18px] text-[10px] cursor-pointer">Education</span>
            {activeTab === 'education' && <div className='absolute inset-x-0 bottom-[-8px] h-0.5 bg-[#ff004f] origin-left transform transition-transform scale-x-50 '></div>}
          </li>
        </ul>

        <div className={section1Visible ? 'block' : 'hidden'}>
          <ul>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">UI/UX </span><br /><div className="text-[10px] lg:text-[16px]">Designing Web/App interfaces</div> </li>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">Web Development </span><br /><div className="text-[10px] lg:text-[16px]">Web App Development</div></li>
          </ul>
        </div>
        <div className={section2Visible ? 'block' : 'hidden'}>
          <ul>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">June 2023 - Present </span><br /><div className="text-[10px] lg:text-[16px]">Web Developer </div></li>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">Sep 2022 - June 2022 </span><br /> <div className="text-[10px] lg:text-[16px]">Senior Recruiter </div></li>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">Nov 2019 - Aug 2022 </span><br /><div className="text-[10px] lg:text-[16px]">Senior Technical Support</div></li>
          </ul>
        </div>
        <div className={section3Visible ? 'block' : 'hidden'}>
          <ul>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">2012 - 2016 </span><br /> <div className="text-[10px] lg:text-[16px]">Bachelors of Technology </div></li>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">2010-2012 </span><br /><div className="text-[10px] lg:text-[16px]">Intermediate Education</div></li>
            <li className="my-[10px]"><span className="text-[#b54769] lg:text-[14px] text-[10px]">2001-2010 </span><br /><div className="text-[10px] lg:text-[16px]">State Secondary Education </div></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
