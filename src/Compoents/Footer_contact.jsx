import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // import the icon properly

const Footer_contact = ({id}) => {
  return (
    <div id={id}  
     className='bg-yellow-400 flex flex-col items-center py-[10px] mt-[25px]'>
      <p className='text-white text-[25px] font-bold italic'>Feel Free to Contact</p>

      <div className='bg-white text-gray-600 flex flex-col items-center gap-[10px] p-[15px] mt-[10px] rounded-[3px] [&>input]:border-[3px]'>
        <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px]"
          type="text"
          placeholder="Enter username"
        />

        <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px]"
          type="email"
          placeholder="Enter your email"
        />

        <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px]"
          type="text"
          placeholder="Enter your Message"
        />
      </div>

      <p className='bg-white px-[10px] py-[3px] rounded-[3px] font-bold mt-[15px]'>Submit</p>

      <p className='font text-[15px] flex gap-[5px] items-center justify-center my-[25px]'>
        Made with love <FontAwesomeIcon className='w-[18px] mt-[2.5px] ' icon={faHeart} /> by Dev <span className='font-bold' >HAFEEZ</span>
      </p>
    </div>
  );
};

export default Footer_contact;
