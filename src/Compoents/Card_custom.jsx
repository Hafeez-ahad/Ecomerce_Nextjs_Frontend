'use client'

import React from "react";
import ButtonSmall from "./ButtonSmallCustom";
import { useRouter } from "next/navigation";

const Card_custom = ({item}) => {

  const router = useRouter()

  return (
   

 <div
    key={item.id}
    className="  w-[160px] md:w-[200px] h-fit  p-[6.5px] md:p-[10px]   flex flex-col border-gray-300 border-[2px] md:border-[4px] rounded-[0px_25px]  md:rounded-[3px_35px]"
  >
    <img onClick={()=> router.push(`detailPage/${item.id}`) }
      src={item.pic.img1}
      alt={item.title}
      className="  mb-[3px] w-[145px] md:w-[180px] h-[120px] md:h-[130px] object-cover m-auto"
    />
    <div className="border-t border-yellow-300 ">
      <div className="flex flex-col items-center">
        <div className="text-[13px] md:text-[14px] mt-[03px] text-black font-bold">
          {item.title}
        </div>
        <div className=" text-[10px] md:text-[10px] text-gray-400  md:pl-[5px] mt-[2px] md:mt-[5px] leading-[1.01]">
          {item.desc.slice(0,70)}
        </div>
      </div>

      <div className="flex justify-between items-center px-[5px] mt-[8px] mb-[5px]">
         <span className="  text-[9px] md:text-[10px]  bg-black w-fit px-[07px] py-[1px] rounded-[3px] text-yellow-400 font-bold">
        {item.price}$
      </span>
        <p className=" text-[09px] md:text-[10px] bg-yellow-400 px-[4px] py-[2px] text-white rounded-[2px]">
          Add to cart
        </p>
      </div>
    </div>
  </div>




  );
};

export default Card_custom;
