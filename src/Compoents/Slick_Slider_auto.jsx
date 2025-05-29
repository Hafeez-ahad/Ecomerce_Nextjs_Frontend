import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products_mormal } from "@/utils/constant/text";
import Card_feature from "./Card_Feature";

function Slick_Slider() {
const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
   arrows:false,
  autoplaySpeed:0,
  cssEase: "linear",
  pauseOnHover: false,
  
  responsive: [
    {
      breakpoint: 900, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600, // From 768px up to 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    // You can optionally add:
  
  ],
};

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
          {products_mormal.map((items) => (
            <Card_feature key={items.id} item={items} />
          ))}
        
       
      

    
      </Slider>
    </div>
  );
}

export default Slick_Slider;

