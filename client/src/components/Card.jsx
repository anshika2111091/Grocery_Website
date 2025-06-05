import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link to={`/products/category/${item.path}`}>
      {" "}
      <div
        className="flex items-center justify-between  cursor-pointer flex-col gap-1 p-4 rounded-[10px]"
        style={{ backgroundColor: item.bgColor }}
      >
        <img
          src={item.image}
          className="transition-transform duration-300 hover:scale-110"
          width={120}
          height={80}
          alt=""
        />
        <p className="whitespace-nowrap text-[14px]">{item.text}</p>
      </div>
    </Link>
  );
};

export default Card;
