import React from 'react'
import PaymentCard from '../components/PaymentCard'
import ShoppingItems from '../components/ShoppingItems'
import { Link } from 'react-router-dom'
import arrow from "../assets/arrow_right_icon_colored.svg";

const Cart = () => {
  return (
    <>
    <div className='w-[90vw] mx-auto my-10 md:my-16'>
    <div className='flex  justify-between flex-col gap-10 lg:gap-0 lg:flex-row'>
     <ShoppingItems/>
<PaymentCard/></div>
 </div>
</>

  )
}

export default Cart