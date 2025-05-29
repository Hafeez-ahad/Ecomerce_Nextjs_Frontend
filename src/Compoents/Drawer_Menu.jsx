import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
const DrawerMenu = ({ open2, onClose2 }) => {
    const router = useRouter();
  
  return (
    <>
      <Drawer
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose2}
        open={open2}
        placement="left" // ✅ This sets the drawer to open from the right
      >
        <div className="flex flex-col items-center gap-[20px] [&>p]:bg-yellow-400   [&>p]:text-white   [&>p]:w-[100px]   [&>p]:text-center [&>p]:rounded-[5px] [&>p]:py-[4px] [&>p]:font-bold [&>p]:border-black [&>p]:border-[2px]" >
             <p onClick={()=> router.push('/allproduct') } >Collection         </p>
        <p onClick={()=> router.push('/about') } >About</p>
        <p>Status</p>
        <p onClick={()=> router.push('#contact')} >Contact</p>
        <p onClick={()=> router.push('/addproduct') } >Add Product</p>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerMenu;
