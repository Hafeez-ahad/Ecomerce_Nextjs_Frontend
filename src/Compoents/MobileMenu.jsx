'use client'
import React, { useState } from 'react'
import DrawerCart from './Drawer_cart';
import { cartItemsDummy } from '@/utils/constant/text';
import DrawerMenu from './Drawer_Menu';
import { Badge } from 'antd';

const MobileMenu = () => {

// FOR DRAWER CART
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // FOR DRAWER MENU
  const [open2, setOpen2] = useState(false);
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

  return (
    <div className='  block md:hidden flex items-center justify-between p-[07px] ' >
      <img src="./logo.jpg" alt="" className='w-[80px] h-[80px] bg-contain  border-yellow-400 border-[3px] rounded-[50px] '  />
     <div className='flex  items-center gap-[10px] ' >
      <Badge count={5} style={{ fontSize: '7px', height: '11px', minWidth: '11px', lineHeight: '11px' }}>
  <img src="./cart.png" alt="" onClick={showDrawer} className="w-[20px]" />
</Badge>

      <img src="./menu1.png" alt="" onClick={showDrawer2}   className='w-[35px]  ' />
     </div>
{/* FOR DRAWER  */}
    <DrawerCart open={open} onClose={onClose} cartItems={cartItemsDummy} />
    <DrawerMenu open2={open2}  onClose2={onClose2} />

    </div>
    
  )
}

export default MobileMenu
