import React from 'react'

const AddressForm = () => {
  return (
    <div className='flex flex-col gap-3 lg:w-[30vw] w-[85vw]'>
        <div className='flex gap-2'>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='First Name'/>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='Last Name'/>
        </div>
        <input className="border border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="email" placeholder='Email Address'/>
        <input className="border border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='Street'/>
        <div className='flex gap-2'>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='City'/>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='State'/>
        </div>
        <div className='flex gap-2'>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="number" placeholder='Zipcode'/>
            <input className="border w-[50%] border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='Country'/>
        </div>
        <input className="border border-gray-300 focus:outline-[#4fbf8b] focus:outline-1 focus:border-0 p-2 rounded-[5px] placeholder:text-gray-400 placeholder:font-light placeholder:text-sm " type="text" placeholder='Phone Number'/>
        <div className=' text-white grid place-content-center bg-[#4fbf8b] hover:bg-[#45a87a] py-3 cursor-pointer mt-4 text-[14px]'>SAVE ADDRESS</div>
    </div>
  )
}

export default AddressForm