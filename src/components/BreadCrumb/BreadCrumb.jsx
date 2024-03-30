import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";

const BreadCrumb = ({ label, path }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex justify-center col-span-12 item-center">
        <div className="">
          <h2 className="py-2 text-xl font-medium text-center text-gray-900 md:py-4 md:text-4xl">
            {label}
          </h2>
          <div className="flex gap-2 md:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 md:gap-4"
            >
              <Icons.Home className="" /> Home
            </Link>
            <Link
              href={path}
              className="flex items-center gap-2 text-gray-700 md:gap-4"
            >
              <Icons.ArrowRight className="mt-3" /> {label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
