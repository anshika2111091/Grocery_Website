import React from 'react'
import { dummyProducts } from '../assets/assets'
import ItemCard from '../components/ItemCard'

const AllProducts = () => {
  return (
    <>
    <div className="xl:w-[80vw] w-[95vw] mx-auto my-10">
        <div className='flex  flex-col  mb-16 relative'>  <p class="text-2xl md:text-2xl font-medium whitespace-nowrap text-gray-700  ">ALL PRODUCTS</p>
        <span className='bg-[#4fbf8b] h-0.5 rounded-full absolute bottom-0 text-end w-[70px]'></span></div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {dummyProducts.map((item,index)=>(
<><ItemCard item={item}/></>
))}
</div>
 
    </div>
    
    </>
  )
}

export default AllProducts