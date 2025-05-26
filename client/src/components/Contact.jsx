import React from 'react'

const Contact = () => {
  return (
    <div className='xl:w-[80vw] w-[95vw] mx-auto flex my-20  flex-col justify-center items-center'>
        <p className="md:text-4xl text-gray-700 text-2xl font-medium">Never Miss a Deal!</p>
        <p className="md:text-lg text-gray-500/80  text-center pb-8 mt-2">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <div className='flex  mt-3'>
             <div className='flex border border-r-0 border-gray-300 border-collapse rounded-tl-[5px] rounded-bl-[5px]  w-[40vw] justify-between'>
            <input type="text" className='focus:outline-none  placeholder:text-gray-400 p-4' placeholder='Enter your email id' /> 
        </div>
        <div className="text-white  bg-[#4fbf8b] flex justify-center items-center border-collapse  px-8 py-4 rounded-tr-[5px] rounded-br-[5px]">Subscribe</div>
       
        </div>
    </div>
  )
}

export default Contact