


import { useRouter } from 'next/navigation';
import React from 'react';

const Card_AllProducs = ({ item }) => {
  const originalPrice = parseFloat(item.price);
  const discountPercent = parseFloat(item.discountPercent);
  const isDiscounted = discountPercent > 0;

  const discountedPrice = isDiscounted
    ? (originalPrice - (originalPrice * discountPercent) / 100).toFixed(1)
    : originalPrice.toFixed(2);

    const router = useRouter()
  return (
    <div
      key={item.id}
      className="relative w-[100px] md:w-[200px] h-fit p-[2px] md:p-[3px] flex flex-col border-[2px] border-gray-400 rounded-[0px_18px]  md:rounded-[0px_35px]"
    >
      <img
            onClick={()=> router.push(`detailPage/${item.id}`) }

        src={item.pic.img1}
        alt={item.title}
        className="w-[120px] md:w-[180px] h-[70px] md:h-[130px] object-cover m-auto mb-[5px] rounded-[0px_10px_0px_0px] md:rounded-[0px_17px_0px_0px] "
      />

      <div className="bg-black flex flex-col items-center text-white rounded-[0px_0px_0px_15px] md:rounded-[0px_0px_0px_30px] ">
        <div className="w-full px-[5px] flex justify-between">
          {isDiscounted ? (
            <>
              <p className="text-gray-300 text-[7px] md:text-[12px] line-through">
                ${originalPrice.toFixed(2)}
              </p>
              <p className="text-yellow-400 font-extrabold text-[7px] md:text-[12px]">
                ${discountedPrice}
              </p>
            </>
          ) : (
            <p className="text-yellow-400 font-extrabold text-[7px] md:text-[11px] ml-auto">
              ${discountedPrice}
            </p>
          )}
        </div>

        <p className="text-[8px] md:text-[16px] mt-[3px] font-bold">{item.title}</p>

        <p className="text-[5px] leading-[1.1] ml-[3px] md:text-[10px] mt-[3px] text-gray-400">
          {item.desc.slice(0, 110)}
        </p>

        <div className="px-[5px] mt-[8px] mb-[5px]">
          <p className="text-[4px] md:text-[10px] bg-yellow-300 px-[2px] py-[0.5px] md:px-[4px] md:py-[2px] text-black font-bold rounded-[2px]">
            Add to cart
          </p>
        </div>
      </div>

      {isDiscounted && (
        <span className="absolute left-[1.5px] md:right-[3px] top-[1px] md:top-[2px] text-[4.5px] md:text-[9px] bg-black w-fit px-[5px] py-[1.5px] rounded-[3px] text-yellow-400 font-bold">
          {discountPercent}% OFF
        </span>
      )}
    </div>
  );
};

export default Card_AllProducs;

