import { useRouter } from "next/navigation";
import React from "react";

const Card_hotDeal = ({ item }) => {
  const   router = useRouter() 
  return (
    <div
      key={item.id}
      className=" relative w-[100px] md:w-[180px] h-fit  p-[6px]   flex flex-col   "
    >
      <img
            onClick={()=> router.push(`detailPage/${item.id}`) }

        src={item.pic.img1}
        alt={item.title}
        className="w-[70px] h-[70px] md:w-[120px]  md:h-[110px] object-cover  m-auto rounded-[100%]    "
      />
      <div className="border-t border-white mt-[6px] ">
        <div className="flex flex-col items-center">
          <div className="text-[7px] md:text-[14px] mt-[03px] text-black font-bold">
            {item.title}
          </div>
        </div>

        <div className="flex justify-center items-center px-[5px] mt-[8px] mb-[5px]">
          <p className=" text-[06px] md:text-[10px] bg-black px-[4px] py-[2px] text-white font-bold rounded-[2px]">
            Add to cart
          </p>
        </div>
      </div>
      <span className=" absolute right-1 text-[5.5px] md:text-[10px]  bg-black w-fit px-[07px] py-[1px] rounded-[3px] text-white font-bold">
        {item.price}$
      </span>
    </div>
  );
};

export default Card_hotDeal;
