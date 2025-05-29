import { useRouter } from "next/navigation";
import React from "react";

const Card_feature = ({ item }) => {
  // Convert string to number and calculate discounted price
  const originalPrice = parseFloat(item.price);
  const discountPercent = parseFloat(item.discountPercent);
  const discountedPrice = (originalPrice - (originalPrice * discountPercent) / 100); // 2 decimal places

  const router = useRouter()
  return (
    <div
      key={item.id}
      className="relative w-[160px] md:w-[200px] h-fit p-[3px] md:p-[6px] flex flex-col border-[2px] border-gray-400 rounded-[5px]"
    >
      <img 
      onClick={()=> router.push(`detailPage/${item.id}`) }
        src={item.pic.img1}
        alt={item.title}
        className="w-[155px]  md:w-[180px] h-[130px] md:h-[130px] object-cover m-auto mb-[5px]"
      />
      <div className="bg-black">
        <div className="flex flex-col items-center">
          <div className="text-white w-[100%] px-[5px] flex justify-between">
            <p className="text-gray-300 text-[13px] md:text-[13px] line-through">${originalPrice}</p>
            <p className="text-yellow-400 font-extrabold text-[13px] md:text-[13px]">${discountedPrice}</p>
          </div>
          <div className="text-[14px] md:text-[14px] mt-[8px] text-white font-bold">
            {item.title}
          </div>
        </div>

        <div className="flex justify-center items-center px-[5px] mt-[10px] mb-[5px]">
          <p className="text-[8px] md:text-[10px] bg-yellow-400 px-[4px] py-[2px] text-black font-bold rounded-[2px]">
            Add to cart
          </p>
        </div>
      </div>
      <span className="absolute right-[1px] md:right-[3px] top-[1px]  md:top-[2px] text-[7.5px] md:text-[10px] bg-black w-fit px-[5px] py-[1px] rounded-[3px] text-yellow-400 font-bold">
        {discountPercent}% OFF
      </span>
    </div>
  );
};

export default Card_feature;
