import Image from "next/image";
import React from "react";

const AboutContent = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <h5 className="hidden text-base text-gray-700 md:text-xl md:block">
              About us
            </h5>
            <h1 className="mb-2 text-3xl text-gray-900">History</h1>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="text-[#6B7280]">
              In 1962, the Southern Michigan Mutual Insurance Company celebrated
              its 100th year in continuous operation and was presented with a
              plaque by the State of Michigan as a Centenary Business.
            </p>
          </div>
        </div>

        <div className="py-4 md:py-12">
          <Image
            className="w-full"
            src="https://i.ibb.co/syHQJJM/Rectangle-4420.png"
            width={100}
            height={60}
            unoptimized
            alt="tru-brand"
          />
        </div>

        <div>
          <p className="text-[#6B7280]   mb-8 md:mb-4">
            In 2013, Southern Michigan Mutual Insurance Company became USA
            Underwriters. The name may have changed, but the dedication to our
            customers, our drive to serve them and their communities hasnt. USA
            Underwriters mission as a leading Property and Casualty Insurance
            company in Michigan, remains largely unchanged from the mission of
            its progenitor: to provide affordable, quality insurance solutions
            to families and individuals.
          </p>
          <p className="text-[#6B7280]   mb-8 md:mb-4">
            Insurance has changed a lot in the last century and a half. When
            Southern Michigan Mutual Insurance Company was founded, automobiles
            simply didnt exist. That all changed — right in the companys back
            yard — at the turn of the 20th century when Henry Fordss Model T
            began rolling off the assembly line.
          </p>
          <p className="text-[#6B7280]   mb-8 md:mb-4">
            In an instant of history, the car supplanted the horse and buggy as
            Americans primary mode of transportation. The era of the Automobile
            had begun, and the Southern Michigan Mutual Insurance Company was
            front and center for one of the most dramatic shifts in American
            history. The car accelerated economic growth, and offered a freedom
            of travel that had been nigh-unimaginable for the vast majority of
            people through the whole of human history.
          </p>
        </div>

        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-12 md:col-span-6">
            <h5 className="hidden text-base text-gray-700 md:text-xl md:block">
              Believe
            </h5>
            <h1 className="mb-2 text-3xl text-red-700">OUR MISSION</h1>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-500 ">
              Our mission has remained largely unchanged over the century and a
              half the company has operated: to quickly provide affordable
              insurance solutions for our customers that support the communities
              and families they represent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
