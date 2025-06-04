import React from "react";
import SomeItems from "./SomeItems";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <>
      {" "}
      <div className="xl:w-[80vw] w-[95vw] mx-auto my-10 flex flex-col">
        <div className="flex  flex-col  mb-16 justify-center items-center">
          {" "}
          <p className="text-2xl mb-0.5 md:text-3xl font-medium whitespace-nowrap text-gray-700  ">
            Related Products
          </p>
          <span className="bg-[#4fbf8b] h-0.5 rounded-full  bottom-0 text-end w-[70px]"></span>
        </div>
        <SomeItems />
        <Link to="/products">
          {" "}
          <div className="my-16 flex items-center justify-center">
            <span className="border cursor-pointer border-[#4fbf8b] px-12 py-2  rounded-[5px] text-[#4fbf8b]">
              See More
            </span>
          </div>{" "}
        </Link>
      </div>
    </>
  );
};

export default RelatedProducts;
