import React, { useState } from "react";
import { Button, Drawer } from "antd";
const DrawerCart = ({ open, showDrawer, onClose, cartItems}) => {
  return (
    <>
      <Drawer
        
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
       <div>
  {cartItems.map((item) => (
    <div
      key={item.id}
      className="flex flex-col border border-gray-200 rounded-[2px] p-[5px] mb-4"
    >
      <div className="flex items-center gap-[7px]">
        <img
          src={item.img1}
          alt="product"
          className="w-[70px] bg-cover border-gray-200 rounded-[2px]"
        />
        <p className="text-[11px] text-gray-400">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-[-8px]">
        <p className="text-[9px] ml-[17px] bg-yellow-500 px-[5px] rounded-[2px] text-white">
          {item.price}
        </p>
        <img
          src={item.removeIcon}
          alt="remove"
          className="w-[22px]"
        />
      </div>
    </div>
  ))}

</div>

<p className="m-auto w-fit px-[10px] bg-[black] text-white px-[10px] py-[05px] rounded-[5px]" >
  Checkout
</p>


      </Drawer>
    </>
  );
};
export default DrawerCart;
