"use client";
import React, { useState } from "react";
import { Icons } from "../Icons";

const AccordionItem = ({ title, children, itemActive }) => {
  const [active, setActive] = useState(itemActive || false);

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className="w-full border border-gray-700 first:rounded-t-lg last:rounded-b-lg">
      <button
        className={` flex w-full text-left p-5`}
        onClick={() => handleToggle()}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-base">{title}</h3>
          {active ? <Icons.UpArrow /> : <Icons.DownArrow />}
        </div>
      </button>

      <div
        className={`bg-gray-900 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
