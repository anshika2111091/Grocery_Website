import React from 'react'
import upload from "../assets/upload_area.png";

const AddProduct = () => {
  return (
    <div className=' ml-10 my-[30px] flex flex-col gap-6 md:w-[34vw] w-[70vw]'>
        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Image" className='text-gray-700 font-medium text-[18px]'>Product Image</label>
        <div className='flex gap-3 flex-wrap'>
          <img src={upload} alt="" className='w-[110px]' />
          <img src={upload} alt="" className='w-[110px]' />
          <img src={upload} alt="" className='w-[110px]' />
          <img src={upload} alt="" className='w-[110px]' />
        </div>
        </div>

        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Name" className='text-gray-700 font-medium text-[18px]'>Product Name</label>
       <input type="text" placeholder='Type here' className='border border-gray-300 rounded-[5px] p-3 outline-none' />
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[18px]'>Product Description</label>
       <input type="text" placeholder='Type here' className='border border-gray-300 rounded-[5px] p-3 h-40 outline-none' />
        </div>

        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[18px]'>Product Description</label>
        <select className='outline-none border border-gray-300 rounded-[5px] p-3 text-[16px] bg-white' name="category" id="category">
        <option value="category">Select Category</option>
  <option value="vegetable">Vegetable</option>
  <option value="fruits">Fruits</option>
  <option value="drinks">Drinks</option>
  <option value="instant">Instant</option>
  <option value="dairy">Dairy</option>
  <option value="bakery">Bakery</option>
  <option value="grains">Grains</option>
 
</select>
        </div>

        <div className='flex gap-5'>
        <div className='flex flex-col gap-2 w-[50%]'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[18px]'>Product Description</label>
       <input type="number" min={0} placeholder='0' className='border border-gray-300 rounded-[5px] p-3  outline-none' />
        </div>
        <div className='flex flex-col gap-2 w-[50%]'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[18px]'>Product Description</label>
       <input type="number" min={0} placeholder='0' className='border border-gray-300 rounded-[5px] p-3  outline-none' />
        </div>

        </div>
        <div className='bg-[#4fbf8b] mt-5 hover:bg-[#45a87a] transition text-white w-[100px] py-3 rounded-[5px] grid place-content-center font-medium'>ADD</div>
       
    </div>
  )
}

export default AddProduct