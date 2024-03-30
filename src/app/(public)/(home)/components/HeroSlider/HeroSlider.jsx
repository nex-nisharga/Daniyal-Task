"use client";
import { useRef } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleSlider from "./SingleSlider";
import { HeroSliderData } from "@/static";

const HeroSlider = () => {
  const settings = {
    className: "slick-container",
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    dots: true,
    arrows: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null); // type: <Slider | null>

  return (
    <div className="py-6 slider">
      <Slider ref={sliderRef} {...settings}>
        {HeroSliderData?.map((data, index) => (
          <SingleSlider data={data} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
