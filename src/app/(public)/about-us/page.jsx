import { BreadCrumb } from "@/components/BreadCrumb";
import React from "react";
import { AboutContent } from "./components/AboutContent";
import { FeatureBox } from "@/static";
import { SingleFeature } from "../(home)/components";

const page = () => {
  return (
    <div>
      <BreadCrumb label="About Us" path="/about-us" />
      <AboutContent />
      <div className="container mb-10">
        <div className="grid grid-cols-12 gap-4">
          {FeatureBox.map((data) => (
            <SingleFeature data={data} key={data?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
