import React,{useState} from 'react'
import arrow from "../assets/arrow_right_icon_colored.svg";
import { Link } from 'react-router-dom';
import remove from "../assets/remove_icon.svg";
import potato from "../assets/potato_image_1.png";
import { ToastContainer, toast } from 'react-toastify';

const ShoppingItems = () => {
    const [quantity,setQuantity]=useState(1);
    const notify = (e) => {
        e.stopPropagation(); 
        toast.success("Removed from Cart",{
        position: 'top-center',
        autoClose: 2000,         
        closeOnClick: true,
        hideProgressBar:true,         
      });}
  return (
    <div className='lg:w-[60vw] w-[95vw]'>
           <ToastContainer />
        <div className='flex gap-2 items-end'>
        <p className='text-gray-700 text-[30px] font-medium'>Shopping Cart</p>
        <p className='mb-1.5 text-[#4fbf8b] font-medium'>3 Items</p>
        </div>
        <div className='flex mt-10'>
            <div className='w-[60%] text-gray-500 text-sm md:text-base font-medium'>Product Details</div>
            <div className='w-[20%] text-gray-500 text-sm md:text-base font-medium justify-center flex'>Subtotal</div>
            <div className='w-[20%] text-gray-500 text-sm md:text-base font-medium flex justify-center'> Action</div>
        </div>

<div className='my-5'>

<div className='flex items-center'>
    <div className='w-[60%] flex md:gap-6 gap-3  items-center'>
         <div className="flex cursor-pointer border border-gray-300 rounded-[5px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] items-center justify-center">
                  <img src={potato} alt="" />
        </div>
        <div className='flex gap-0.5 flex-col'>
            <p className='text-gray-500  text-sm md:text-base font-medium'>Potato 1 Kg</p>
            <p className='text-gray-400 text-sm md:text-base '>Weight N/A</p>


           <div className='flex text-gray-400 text-sm md:text-base'>Qty:<select
      value={quantity}
      onChange={(e) => (setQuantity(Number(e.target.value)))}
     className='outline-none'
    >
      {Array.from({ length: 9 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select></div>    
        </div>
    
    </div>
    <div className='w-[20%] text-gray-500 text-md font-medium flex justify-center'>$ {88*quantity}</div>
    <div className='w-[20%] cursor-pointer flex justify-center' onClick={notify}><img src={remove} width={25} height={25} className='md:w-[25px] md:h-[25px] w-[20px] h-[20px]' alt="" /></div>
</div>



</div>
<Link to="/"> <div className='flex gap-2 cursor-pointer mt-10'>
  <img src={arrow} className='transform transition-transform duration-300 group-hover:-translate-x-1' alt="" />
  <p className='text-[16px] font-medium text-[#4fbf8b]'>Continue Shopping</p>
</div> </Link>
      
       
    </div>
  )
}

export default ShoppingItems