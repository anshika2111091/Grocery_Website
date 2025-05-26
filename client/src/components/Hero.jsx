import React from 'react'
import banner from "../assets/main_banner_bg.png";
import arrow from "../assets/black_arrow_icon.svg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='xl:w-[80vw] w-[95vw] mx-auto my-10 relative flex items-center'>
        <div className='absolute px-20'>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 mb-8">Freshness You Can Trust, Savings You will Love!</p>
            <div className='flex gap-8'> <Link to="/products"><div className='text-white bg-[#4fbf8b] px-8  py-3 rounded-[5px] text-[18px] font-medium'>Shop now</div></Link> 
            <div className=' gap-2  items-center group flex'>
                <p className='font-medium text-gray-700 text-[18px]'>Explore deals</p>
            <img src={arrow} className='transform transition-transform duration-300 group-hover:translate-x-1' alt="" /></div>
        </div></div>
          
        <img src={banner} alt="" /></div>
  )
}

export default Hero