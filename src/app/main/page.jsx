import Products_for_main from '@/Compoents/Products_Main'
import Banner1 from '@/Compoents/Banner1'
import Footer_contact from '@/Compoents/Footer_contact'
import MenuC from '@/Compoents/MenuC'
import MobileMenu from '@/Compoents/MobileMenu'
import React from 'react'

const MainPage = () => {
  return (
    <div>
      <MenuC/>
      <MobileMenu  />
      <Banner1/>
     
      <Products_for_main/>
      <Footer_contact  id='contact' />
     

    </div>
  )
}

export default MainPage
