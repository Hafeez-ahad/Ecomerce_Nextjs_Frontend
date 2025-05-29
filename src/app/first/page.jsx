import ButtonCustom from '@/Compoents/ButtonCustom.jsx'
import React from 'react'
const FirstPage = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black h-screen '>
     <div className='bg-white w-[100%] '> <img className='m-auto' src="./logo.jpg" alt="" /></div>
      
      <ButtonCustom text='Getting Started' />
      

      
    </div>
  )
}

export default FirstPage
