import React from 'react'
import Lottie from "lottie-react";
import tick_animation from "../assets/tick_animation.json";
import arrow from "../assets/arrow_right_icon_colored.svg";
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
    <div className="w-64 h-64">
    <Lottie animationData={tick_animation} loop={true}/>
  </div>
  <p className='font-medium text-[22px]'>Order Placed Successfully!</p>
<Link to="/"> <div className='flex gap-2 cursor-pointer mt-5'>
    <img src={arrow} className='transform transition-transform duration-300 group-hover:-translate-x-1' alt="" />
    <p className='text-[16px] font-medium text-[#00C853]'>Continue Shopping</p>

  </div> </Link> 
  
  </div>
  )
}

export default SuccessPage