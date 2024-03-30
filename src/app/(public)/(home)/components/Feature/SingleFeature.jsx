import Image from "next/image";
import React from "react";

const SingleFeature = (data) => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="p-12 border rounded-md">
        <div className="w-16 h-16 p-4 bg-gray-200 rounded-full">
          <Image
            className="w-8 h-8"
            src={data?.data?.icon}
            width={100}
            height={60}
            unoptimized
            alt="tru-brand"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
            {data?.data?.title}
          </h3>
          <p>{data?.data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
