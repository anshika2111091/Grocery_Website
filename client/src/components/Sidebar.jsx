import React from 'react'
import product_list from "../assets/product_list_icon.svg"
import add_icon from "../assets/add_icon.svg"
import order_icon from "../assets/order_icon.svg"

const Sidebar = () => {
  return (
    <div className='md:w-[15vw] w-[10vw] flex flex-col border-r-[0.25px] border-gray-400'>
        <div className='flex cursor-pointer hover:bg-[#4fbf8b]/10 w-full py-3  items-center gap-3 hover:border-r-4  border-[#4fbf8b] pl-3 pr-3 md:pr-0'>
            <img src={add_icon} width={30} height={30} alt="" />
            <p className='hidden md:flex text-gray-700 text-[16px]'>Add Product</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#4fbf8b]/10 w-full py-3  items-center gap-3 hover:border-r-4  border-[#4fbf8b] pl-3 '>
            <img src={product_list} width={30} height={30} alt="" />
            <p className='hidden md:flex text-gray-700 text-[16px]'>Product List</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#4fbf8b]/10 w-full py-3  items-center gap-3 hover:border-r-4  border-[#4fbf8b] pl-3 '>
            <img src={order_icon} width={30} height={30} alt="" />
            <p className='hidden md:flex text-gray-700 text-[16px]'>Orders</p>
        </div>

    </div>
  )
}

export default Sidebar