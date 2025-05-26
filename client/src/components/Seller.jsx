import React from 'react'
import ItemCard from './ItemCard'
import { dummyProducts } from '../assets/assets'

const Seller = () => {
  return (
    <>
    <div className="xl:w-[80vw] w-[95vw] mx-auto my-10">
    <p class="text-2xl md:text-3xl font-medium text-gray-700 mb-5 ">Best Sellers</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">   {dummyProducts.map((item,index)=>(
<><ItemCard item={item}/></>
))}
</div>
 
    </div>
    
    </>
  )
}

export default Seller