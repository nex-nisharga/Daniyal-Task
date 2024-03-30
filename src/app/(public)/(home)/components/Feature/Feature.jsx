import RoundedBtn from "@/components/RoundedBtn";
import { Features, FeatureBox } from "@/static";
import React from "react";
import SingleFeature from "./SingleFeature";
import { RoundedBtnFull } from "@/components";

const Feature = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-10 text-center md:mb-0 md:col-span-6 md:text-left">
              <p className="">{Features.subtitle}</p>
              <h5 className="mb-10 text-3xl font-semibold text-gray-900 uppercase">
                {Features.title}
              </h5>
              <div className="hidden md:block">
                <RoundedBtn
                  className="text-white bg-red-900 "
                  label="MCCA Refund FAQ"
                  route="/"
                />
              </div>
              <div className="block md:hidden">
                <RoundedBtnFull
                  className="text-white bg-red-900 "
                  label="MCCA Refund FAQ"
                  route="/"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p>
                The Michigan Catastrophic Claims Association approved refunds
                for certain Michigan Policyholders due a surplus of funds being
                held by the MCCA. The approved refund will be $400 per eligible
                vehicle insured with USA Underwriters on October 31st, 2021 at
                11:59 PM, or $80 if the vehicle is an insured historical
                vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          {FeatureBox.map((data) => (
            <SingleFeature data={data} key={data?.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
