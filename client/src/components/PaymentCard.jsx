import React from 'react'
import { Link } from 'react-router-dom'

const PaymentCard = () => {
  return (
    <div className=' lg:w-[30vw] w-[85vw] mx-auto lg:mx-0  p-6 bg-gray-500/10'>
        <p className='font-medium text-[24px] mb-2 text-gray-700'>Order Summary</p>
        <hr  className='text-gray-400 mb-6'/>


        <div className='flex flex-col gap-2 mb-6 '>
        <p className='font-medium text-[16px] text-gray-700'>DELIVERY ADDRESS</p>
        <div className='flex justify-between items-center'>
     <p className='text-gray-500'>No address found</p>
     <p className='text-[#4fbf8b] cursor-pointer hover:underline'>Change</p></div>
        </div>
        
        <div className='flex flex-col gap-2'>
        <p className='font-medium text-[16px] text-gray-700'>PAYMENT METHOD</p>
        <select className='outline-none border border-gray-300 p-2 text-[16px] bg-white' name="payment" id="payment">
  <option value="cash">Cash On Delivery</option>
  <option value="online">Online Payment</option>
 
</select>
<hr  className='text-gray-400 mt-6 mb-4' />

        </div>
       <div className='flex flex-col gap-2'>
        <div className='flex justify-between'> <p className='text-gray-500'>Price</p> <p className='text-gray-500'>$87</p></div>
        <div className='flex justify-between'> <p className='text-gray-500'>Shipping Fee</p> <p className='text-[#4fbf8b]'>Free</p></div>
        <div className='flex justify-between'> <p className='text-gray-500'>Tax (2%)</p> <p className='text-gray-500'>$1.74</p></div>

       </div>
       <div className='flex justify-between mt-3 text-[20px]'> <p className='text-gray-500 font-medium'>Total Amount :</p> <p className='text-gray-500 font-medium'>$88.74</p></div>
     <Link to="/success">
   <div className='bg-[#4fbf8b] mt-5 grid place-content-center p-3 text-white font-medium cursor-pointer hover:bg-[#45a87a]'>Pay Now</div>   </Link>



    </div>
  )
}

export default PaymentCard