'use client'; // ✅ Must be at the top

import React from "react";
import Card_custom from "./Card_custom";
import { products_mormal } from "@/utils/constant/text.js";
import Slick_Slider from "./Slick_Slider_auto";
import Slick_slider_CenterMode from "./Slick_Slider_Center";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Route_button from "./Route_button";

const Products_for_main = () => {
  const router = useRouter();

  return (
    <div className="allProducts-css">
      {/* Hot Deals */}
      <div className="w-[95%] m-auto">
        <p className="text-center text-[18px] md:text-[24px] my-[5%] font-bold underline underline-offset-6 decoration-yellow-400">
          HOT DEALS
        </p>
        <Slick_Slider />
      </div>

      {/* Featured */}
      <div className="w-[90%] m-auto">
        <p className="text-center text-[18px] md:text-[24px] my-[5%] font-bold underline underline-offset-6 decoration-yellow-400">
          FEATURED
        </p>
        <Slick_slider_CenterMode />
      </div>

      {/* Products */}
      <div className="w-[95%] m-auto">
        <p className="text-center text-[18px] md:text-[24px] mt-[5%] font-bold underline underline-offset-6 decoration-yellow-400">
          PRODUCTS
        </p>
        <div className="mt-[4%] flex justify-evenly items-center flex-wrap gap-[10px]">
          {products_mormal.map((items) => (
            <Card_custom key={items.id} item={items} />
          ))}
        </div>
        <Route_button text='view more' bgColor='black' path='/allproduct' />
      </div>
    </div>
  );
};

export default Products_for_main;
