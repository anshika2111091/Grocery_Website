import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../assets/star_icon.svg";
import star_dull from "../assets/star_dull_icon.svg";
import { dummyProducts } from "../assets/assets";
import { useParams } from "react-router-dom";

const ItemDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [imgindex,setImageIndex]=useState(0);
  useEffect(() => {
    const product = dummyProducts.find((item) => item._id === id);
    setProduct(product);
    setImageIndex(0);
  }, [id]);
  return (
    <div className="xl:w-[80vw] w-[95vw] mx-auto my-16 flex justify-center  md:gap-8 gap-13 items-center flex-col md:flex-row">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          {product?.image?.map((item,index) => (
            <>
              <div onClick={()=>setImageIndex(index)} key={index} className="flex border cursor-pointer border-gray-300 rounded-[5px] w-[100px] h-[100px] items-center justify-center">
                <img src={item} alt="" />
              </div>
            </>
          ))}
        </div>

        <div className="flex  w-[60vw] md:w-[25vw] border border-gray-300 rounded-[5px] items-center justify-center">
          <img src={product?.image[imgindex]} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <p className="text-2xl xl:text-3xl text-gray-700 font-medium">
            {product?.name}
          </p>
          <div className="flex gap-1">
            {[...Array(4)].map((_, index) => (
              <img width={18} height={18} src={star} />
            ))}
            {[...Array(1)].map((_, index) => (
              <img width={18} height={18} src={star_dull} />
            ))}{" "}
            <p className="text-gray-700">(4)</p>
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="text-gray-400 text-[14px] line-through">
            MRP: ${product?.price}
          </p>
          <p className="text-xl xl:text-2xl text-gray-700 font-medium">
            MRP: ${product?.offerPrice}
          </p>
          <p className="text-[14px] text-gray-400">(inclusive of all taxes)</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium text-gray-700">About Product</p>
          <ul className="list-disc flex  flex-col items-start">
            {product?.description.map((item, index) => (
              <li key={index} className="text-gray-400 text-[14px] ml-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex gap-4">
          <div className="bg-gray-500/10 hover:bg-gray-800/10 cursor-pointer w-[40vw] md:w-[20vw] text-gray-600 text-[16px] font-medium grid place-content-center py-4">
            Add to Cart
          </div>
        <Link to="/cart">  <div className="bg-[#4fbf8b]  hover:bg-[#45a87a] w-[40vw] md:w-[20vw] cursor-pointer text-white text-[16px] font-medium grid place-content-center py-4">
            Buy now
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
