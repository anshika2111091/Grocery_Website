import React from 'react'
import SomeItems from "./SomeItems"
import { dummyProducts } from '../assets/assets'


const Seller = () => {
  return (
    <>
    <div className="xl:w-[80vw] w-[95vw] mx-auto my-10">
    <p class="text-2xl md:text-3xl font-medium text-gray-700 mb-5 ">Best Sellers</p>

 <SomeItems/>
    </div>
    
    </>
  )
}

export default Seller