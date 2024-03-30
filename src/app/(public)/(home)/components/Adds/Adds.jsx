import { RoundedBtn, RoundedBtnFull } from "@/components";
import Image from "next/image";
import React from "react";

const Adds = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="container pt-20 ">
          <div className="relative">
            <Image
              className="w-full"
              src="https://i.ibb.co/py5J4wg/Rectangle-11.png"
              width={100}
              height={60}
              unoptimized
              alt="tru-brand"
            />
            <div className="absolute z-10 bg-red-700 rounded-md bottom-16 left-20 p-7">
              <h5 className="text-lg font-bold text-white">
                Obtain cost-effective same-day insurance <br /> coverage
                quickly.
              </h5>
              <p className="pb-4 my-4 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
                leo. <br /> Etiam enim varius dictum amet hac imperdiet
                facilisis malesuada.
              </p>
              <RoundedBtn
                className="text-white !bg-gray-900 my-4"
                label="Report a Claim"
                route="/"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="container pt-12 text-center">
          <div className="bg-red-700 rounded-md bottom-16 left-20 p-7">
            <h5 className="text-xl font-bold text-white">
              Obtain cost-effective same-day insurance <br /> coverage quickly.
            </h5>
            <p className="pb-4 my-4 text-xs text-white">
              Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
              leo. <br /> Etiam enim varius dictum amet hac imperdiet facilisis
              malesuada.
            </p>
            <RoundedBtnFull
              className="text-white !bg-gray-900 my-4 text-base font-medium"
              label="Report a Claim"
              route="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Adds;
