import React from "react";
import banner from "../assets/bottom_banner_image.png";
import { features } from "../assets/assets";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <div className="xl:w-[80vw] w-[95vw] mx-auto my-20 h-[500px] ">
      <div className="relative">
        <img className="absolute" src={banner} alt="" />
        <div className="flex flex-col absolute right-[5%] top-[80px]">
          <p className="text-2xl  md:text-3xl font-semibold text-[#4fbf8b] mb-6">
            Why We Are the Best?
          </p>
          <div className="flex-col">
            {features.map((item, index) => (
              <>
                <FeatureItem item={item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
