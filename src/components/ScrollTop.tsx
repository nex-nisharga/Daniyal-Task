"use client";
import ScrollToTop from "react-scroll-to-top";
import React from "react";
import { Icons } from "./Icons";

const ScrollTop = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<Icons.UpArrowLong />}
        className="!bg-primary-800 !pl-3.5 !w-9 !h-9"
      />
    </div>
  );
};

export default ScrollTop;
