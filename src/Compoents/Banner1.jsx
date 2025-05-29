import React from "react";

const Banner1 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center  items-center">
      <div>
        <img
          className="sm:w-[400px] md:w-[500px] w-[300px] max-w-[500px] w-ful lh-auto bg-contain    "
          src="./6478627.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-between  sm:w-[400px] w-[300px] sm:h-[240px]  h-[165px] ">
      <p className="font-extrabold text-center italic sm:text-[35px] text-[25px]   leading-tight">
          Elevate <br /> your style by <br /> shopping here <br />1 Click away
        </p>{" "}
        <p className="text-gray-400 sm:text-[22px] text-[15px] ">
          Make it easy !
        </p>
      </div>
    </div>
  );
};

export default Banner1;
