import React from "react";
import Slider from "react-slick";
import { products_mormal } from "@/utils/constant/text";
import Card_hotDeal from "./Card_HotDeal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ComponentCss.css'

function Slick_slider_CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    arrows:true,
    slidesToShow: 5,
   
    speed: 500,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products_mormal.map((item) => (
          <div key={item.id} className="slider-card-wrapper">
           <div className="chid-wraper-slider" >
             <Card_hotDeal item={item} />
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick_slider_CenterMode;
