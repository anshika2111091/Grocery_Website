import React from 'react'
import { footerLinks } from '../assets/assets'
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className='w-[100vw] xl:px-[80px] px-[5%] bg-[#4fbf8b]/10 '>
   <div className='  flex justify-between flex-col gap-8 sm:gap-0 sm:flex-row py-16  '>
        <div className='sm:w-[30%] w-[70%] flex flex-col gap-6 '>
           <div><img src={logo} alt="" /></div> 
            <p className='text-gray-500 md:text-[16px] sm:text-[14px] text-[16px]'>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
        </div>

<div className='flex lg:gap-20 md:gap-10 sm:gap-7 flex-col sm:flex-row gap-8'>
{footerLinks.map((item,index)=>(
    <>
    <div className='flex flex-col sm:gap-6 gap-3 '>
    <p className='text-[16px] font-medium'>{item.title}</p>
    <div className='flex flex-col gap-1'>
        {item.links.map((item,index)=>(
             <>
            <a className='hover:text-underline text-gray-500 text-[14px]' href={item.url}>{item.text}</a></>
        ))}
    </div></div>
    </>
))}</div>
    </div>
    <hr className='h-1  text-gray-400' />
    <div className='py-6 text-gray-700 md:text-[18px] text-[12px] sm:text-[16px] flex justify-center items-center'>
    Copyright 2025 © Anshika.dev All Right Reserved.
    </div>
    </div>

  )
}

export default Footer