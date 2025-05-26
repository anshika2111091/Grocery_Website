import React from 'react'
import { dummyProducts } from '../assets/assets'
import ItemCard from './ItemCard'

const SomeItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {dummyProducts.slice(0, 5).map((item,index)=>(
        <><ItemCard item={item}/></>
        ))}
        </div>
  )
}

export default SomeItems