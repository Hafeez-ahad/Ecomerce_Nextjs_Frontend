"use client"

import React, { useState } from "react";
import { Badge } from "antd";
import DrawerCart from "./Drawer_cart";
import { cartItemsDummy } from "@/utils/constant/text";
import Route_button from "./Route_button";
import { useRouter } from "next/navigation";

const MenuC = () => {

  const router = useRouter();


// FOR DRAWER 
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

 


  return (
    <div className="hidden md:block" >
      <div className="  flex flex-row justify-between items-center w-[97%] m-auto mt-[0.5%] flex ">
        <img src="./logo.jpg" alt="" className="w-[100px] h-[100px] bg-cover  border-[5px] border-yellow-400 rounded-[100%]"  />

        <ul className="flex gap-[8px] [&>li]:text-yellow-400  [&>li]:bg-black [&>li]:rounded-[10px]  [&>li]:border-yellow-400  [&>li]:border-[3px] [&>li]:px-[08px] [&>li]:py-[4px]  " >
        <li onClick={()=> router.push('/allproduct') } >Collection         
 </li>
        <li onClick={()=> router.push('/about') } >About</li>
        <li>Status</li>
        <li onClick={()=> router.push('#contact')} >Contact</li>
        <li onClick={()=> router.push('/addproduct') } >Add Product</li>
      </ul>

      <ul className="flex flex-row gap-[10px] items-center ">
        <li>
           <Badge count={5} >
           <img src="./cart.png" alt=""  className="w-[30px] h-[30px]"   onClick={showDrawer} />
            </Badge> 
            </li>
        <li className="   bg-yellow-400 px-[10px] py-[5px] font-bold rounded-[5px] " >
          Logout
        </li>
      </ul>
      </div>

     <DrawerCart open={open} showDrawer={showDrawer} onClose={onClose} cartItems={cartItemsDummy} />
    </div>
  );
};

export default MenuC;
