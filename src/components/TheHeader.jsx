"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Menu } from "@/static";
import { Icons } from "@/components";

const TheHeader = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  useEffect(() => {
    const bodyEl = document.querySelector("body");

    if (isShowMobileMenu) {
      bodyEl && bodyEl.classList.add("modal-open");
    } else {
      bodyEl && bodyEl.classList.remove("modal-open");
    }
  }, [isShowMobileMenu]);

  return (
    <header className="sticky top-0 z-50 pt-3 bg-white shadow-sm">
      <div className="container">
        {/* larger device menu */}
        <div className="items-center justify-between hidden px-4 py-2 backdrop-blur-sm lg:flex">
          <div className="">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex items-center justify-end gap-6 text-gray-100 ">
            {Menu.map(({ id, route, label, isButton }) => (
              <Link
                className={`whitespace-nowrap transition-colors duration-300 text-gray-900 px-3 py-1.5 md:px-5 md:py-2.5 ${
                  isButton
                    ? " !text-info font-medium rounded-full bg-primary-700"
                    : "hover:text-primary-900"
                }`}
                key={id}
                href={route}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {!isShowMobileMenu ? (
        <div className="container sticky top-0 z-50 flex items-center justify-between h-16 bg-white rounded-full lg:hidden backdrop-blur-sm">
          <div></div>
          <Logo className="!h-10 !w-auto" />
          <button
            onClick={() => setIsShowMobileMenu(true)}
            className="no-underline rounded-md"
          >
            <Icons.Hamburger />
          </button>
        </div>
      ) : (
        <div className="sticky top-0 left-0 block w-full lg:hidden ">
          <div className="">
            <div className="container flex items-center justify-between h-16 bg-white rounded-full lg:hidden backdrop-blur-sm">
              <div></div>
              <Logo className="!h-10 !w-auto" />
              <button
                onClick={() => setIsShowMobileMenu(false)}
                className="no-underline rounded-md"
              >
                <Icons.X />
              </button>
            </div>

            <div className="flex flex-col">
              {Menu.map(({ id, route, label }) => (
                <Link
                  className="px-12 text-gray-200 transition-all bg-red-700 hover:bg-red-500 py-7 whitespace-nowrap"
                  key={id}
                  href={route}
                  onClick={() =>
                    setTimeout(() => {
                      setIsShowMobileMenu(false);
                    }, 200)
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TheHeader;
