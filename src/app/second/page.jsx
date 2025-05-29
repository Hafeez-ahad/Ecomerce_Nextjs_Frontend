import ButtonCustom from '@/Compoents/ButtonCustom'
import React from 'react'

const SecondPage = () => {
  return (
<div className="bg-black h-screen">

<div className='flex flex-col justify-center items-center bg-white '><img className='w-[350px ] h-[350px] bg-cover' src="./seondpageIcon.png" alt="" /></div>

<div className=' text-center '>

  <p className="text-white  pt-[30px] m-auto w-[350px] font-bold text-[25px]">Dressing Well Made Easy</p>
  <p className="text-gray-400 m-auto pb-[20px] w-[237px] text-[14px] ">Discover a Collection That Speaks Volumes in Silence</p>
  <ButtonCustom   text='Next' bgColor='#FF7F00' />
  <p className='text-gray-400 text-[10px] mt-[5px]'>Already have an account ? 
    <span className='  text-[#FF7F00]' >  Log in</span> 
    <br /> or
    <span className='text-[#FF7F00]' >   Sign Up</span>
    </p>
</div>
    </div>
    
  )
}

export default SecondPage
