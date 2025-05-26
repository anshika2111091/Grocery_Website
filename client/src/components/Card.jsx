import React from 'react'
import { assets } from '../assets/assets'
const Card = ({item}) => {
  return (
    <div className="flex items-center justify-between  cursor-pointer flex-col gap-1 p-4 rounded-[10px]"  style={{ backgroundColor: item.bgColor }}>
        <img src={item.image} className='transition-transform duration-300 hover:scale-110' width={120} height={80} alt="" />
        <p className='whitespace-nowrap text-[14px]'>{item.text}</p>
    </div>
  )
}

export default Card