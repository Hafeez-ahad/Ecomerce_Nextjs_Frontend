import ButtonCustom from "@/Compoents/ButtonCustom";
import ButtonSmall from "@/Compoents/ButtonSmallCustom";
import React from "react";

const Login = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="flex flex-col justify-center items-center w-[100%] bg-white ">
        <img
          className=" h-[170px] w-[170px] bg-cover"
          src="./logo.jpg"
          alt=""
        />
      </div>

      <div className="bg-black text-center  text-white flex flex-col  items-center gap-[5px] py-[25px]  ">
        <p className="font-bold text-[25px]">No Worry !</p>
        <p className="text-gray-400  text-[11px] mt-[-09px]  ">Through email update your password</p>
       <div className="flex flex-col gap-[10px] mt-[30px] mb-[15px]" >
      
      

       
         <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="password"
          placeholder="Enter your provided email"
        />
        
      
       </div>
        <ButtonSmall  text="Get Password" />
      
       <div className="flex flex-col gap-[10px] mt-[30px] mb-[15px]" >
      
      

         <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="password"
          placeholder="Enter Password received at your email"
        />
         <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="password"
          placeholder="Enter new Password"
        />
        
      
       </div>
        <ButtonSmall  text="Set New Password" />
      
      </div>
    </div>
  );
};

export default Login;
