import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProduct from '../components/AddProduct'

const Seller = () => {
  return (
    <div className='flex h-[calc(100vh-80px)]'>
    <Sidebar/>
    <AddProduct/>
    </div>
  )
}

export default Seller