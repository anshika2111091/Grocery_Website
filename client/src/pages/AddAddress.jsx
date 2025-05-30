import React from 'react'
import AddressForm from '../components/AddressForm'
import banner from "../assets/add_address_image.svg";

const AddAddress = () => {
  return (
    <>
    <div className='lg:w-[75vw] lg:my-20 my-10 mx-auto w-[85vw] flex gap-16 flex-col'>
     <p className='text-gray-500 text-[30px]'>Add Shipping <span className='text-[#4fbf8b] font-medium'>Address</span></p>
    <div className='flex justify-between items-center  flex-col-reverse lg:flex-row gap-16 lg:gap-0'> 
        <AddressForm/><img src={banner} alt="" /></div>
        </div>
        </>
  )
}

export default AddAddress