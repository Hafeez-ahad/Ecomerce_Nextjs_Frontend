'use client'

import { products_mormal } from "@/utils/constant/text";
import React, { useState, useEffect } from "react";

const DetailPageComponent = ({ getId }) => {
  
  // Find product based on getId
  const product = products_mormal.find(item => item.id == getId);

  // Handle missing product
  if (!product) {
    return <p className="text-center mt-20 text-red-500">Product not found.</p>;
  }

  const [img, setImg] = useState(product.pic.img1);

  return (
    <div className="h-[100vh] flex justify-center ">
      <div className="flex flex-col gap-[15px] w-[600px] m-auto">
        {/* BIG IMAGE */}
        <div className="m-auto border-[2px] border-gray-300 rounded-[2px] p-[2px]">
          <img src={img} alt="" className="w-[250px] h-[250px] object-cover" />
        </div>

        {/* SMALL IMAGES */}
        <div className="w-fit gap-[18px] m-auto flex [&>img]:w-[80px] [&>img]:h-[70px] [&>img]:object-cover [&>img]:border-[3px] [&>img]:rounded-[100%] [&>img]:border-yellow-300 [&>img]:p-[2px]">
          <img onClick={() => setImg(product.pic.img3)} src={product.pic.img3} alt="" />
          <img onClick={() => setImg(product.pic.img2)} src={product.pic.img2} alt="" />
          <img onClick={() => setImg(product.pic.img1)} src={product.pic.img1} alt="" />
        </div>

        {/* TITLE */}
        <p className="m-auto text-[20px] font-bold underline decoration-yellow-400 underline-offset-4">
          {product.title}
        </p>

        {/* DESCRIPTION */}
        <p className="px-[10px] text-[14px] text-gray-500">
          {product.desc}
        </p>

        {/* PRICE */}
       <div className="flex  justify-between mb-[10px]" > 
        <p className="bg-black w-fit  px-[10px] py-[2px] rounded-[2px] text-yellow-400 font-bold text-[12px] m-auto  ">
                    {product.price}$

        </p>
        <p className="bg-black w-fit  px-[10px] py-[2px] rounded-[2px] text-yellow-400 font-bold text-[12px] m-auto  ">
          ADD
        </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPageComponent;
