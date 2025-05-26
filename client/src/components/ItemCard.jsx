import React from 'react'
import { assets } from '../assets/assets'
import star from "../assets/star_icon.svg"
import cart from "../assets/cart_icon.svg";
import star_dull from "../assets/star_dull_icon.svg"
const ItemCard = ({item}) => {
  return (
    <div className='px-3 py-4 border border-gray-300 rounded-[5px] flex flex-col '>
        <div className='flex justify-center'>
        <img className='hover:scale-110 duration-200 transition-transform' src={item.image[0]} width={130} height={130} alt="" />
        </div>
     
        <p className='text-gray-400 text-[14px]'>{item.category}</p>
        <p className='text-[18px] font-medium'>{item.name}</p>
        <div className='flex gap-0.5'>
        {[...Array(4)].map((_, index) => (
<img width={14} height={14} src={star}/>
))}
        {[...Array(1)].map((_, index) => (
<img width={14} height={14} src={star_dull}/> 
))} <p className='text-gray-400'>(4)</p>
        </div>
        <div className='flex gap-10 mt-2'>
            <div className='flex items-end gap-1'>
            <p className='text-[#4fbf8b] text-[20px] font-semibold'>${item.price}</p>
            <p className='text-[15px] text-gray-400 line-through'>${item.offerPrice}</p>
            </div>

            <div class="flex items-center cursor-pointer justify-center gap-2 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded">
                <img src={cart} width={15} height={15} alt="" />
                <p className='text-[14px] text-[#4fbf8b]'>Add</p>
            </div>
        </div>

    </div>
  )
}

export default ItemCard