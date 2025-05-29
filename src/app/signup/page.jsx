import ButtonCustom from "@/Compoents/ButtonCustom";
import ButtonSmall from "@/Compoents/ButtonSmallCustom";
import React from "react";

const Login = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="flex flex-col justify-center items-center w-[100%] bg-white ">
        <img
          className="w-[280px ] h-[280px] bg-cover"
          src="./logo.jpg"
          alt=""
        />
      </div>

      <div className="bg-black text-center  text-white flex flex-col  items-center gap-[5px] py-[25px]  ">
        <p className="font-bold text-[25px]">Get Started</p>
        <p className="text-gray-400  text-[12px] mt-[-10px]  ">Enter your credentials</p>
       <div className="flex flex-col gap-[10px] mt-[30px] mb-[15px]" >
      
       <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="text"
          placeholder="Enter username"
        />

         <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="email"
          placeholder="Enter your email"
        />
        
        
        <input
          className="text-[14px] outline-none border border-gray-600 rounded-[5px] p-[10px] w-[280px] "
          type="password"
          placeholder="Enter your password"
        />
       </div>
        <ButtonSmall  text="Sign Up" />
        <p className="text-gray-400 text-[10px] ">
          Already have an accoount ?{" "}
          <span className="  text-[#FF7F00]">Login</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
