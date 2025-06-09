import React from 'react'
import upload from "../assets/upload_area.png";

const AddProduct = () => {
  return (
    <div className=' ml-10 py-[30px] flex flex-col gap-5 md:w-[34vw] w-[70vw]'>
        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Image" className='text-gray-700 font-medium text-[16px]'>Product Image</label>
        <div className='flex gap-2 flex-wrap'>
          <img src={upload} alt="" className='w-[100px]' />
          <img src={upload} alt="" className='w-[100px]' />
          <img src={upload} alt="" className='w-[100px]' />
          <img src={upload} alt="" className='w-[100px]' />
        </div>
        </div>

        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Name" className='text-gray-700 font-medium text-[16px]'>Product Name</label>
       <input type="text" placeholder='Type here' className='border border-gray-300 rounded-[5px] p-2 outline-none' />
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[16px]'>Product Description</label>
       <input type="text" placeholder='Type here' className='border border-gray-300 rounded-[5px] p-2 h-36 outline-none' />
        </div>

        <div className='flex flex-col gap-2'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[16px]'>Category</label>
        <select className='outline-none border border-gray-300 rounded-[5px] p-2 text-[16px] bg-white' name="category" id="category">
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
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[16px]'>Product Price</label>
       <input type="number" min={0} placeholder='0' className='border border-gray-300 rounded-[5px] p-2  outline-none' />
        </div>
        <div className='flex flex-col gap-2 w-[50%]'>
        <label htmlFor="Product Description" className='text-gray-700 font-medium text-[16px]'>Offer Price</label>
       <input type="number" min={0} placeholder='0' className='border border-gray-300 rounded-[5px] p-2  outline-none' />
        </div>

        </div>
        <div className='bg-[#4fbf8b] cursor-pointer mt-5 hover:bg-[#45a87a] transition text-white w-[100px] py-3 rounded-[5px] grid place-content-center font-medium'>ADD</div>
       
    </div>
  )
}

export default AddProduct