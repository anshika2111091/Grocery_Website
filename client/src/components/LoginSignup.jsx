import React from 'react';
import {useState} from "react";

const LoginSignup = () => {
  const [login,setLogin]=useState(false);
  return (

    <div className="lg:w-[25vw] w-[84vw] sm:w-[50vw] border border-gray-700/10 rounded-[10px] bg-white p-12 flex flex-col ">
      <p className='text-2xl mb-4 text-gray-700 font-medium text-center'><span className='text-[#45a87a]'>User</span> {login ? "Login" : "Signup"}</p>
<div className='flex flex-col gap-4'>

{!login && <div className='flex flex-col gap-1'> <label htmlFor="name"  className='text-sm text-gray-700'>Name</label>
      <input
        type="name"
        placeholder='Enter your name'
        name="name"
        className="border placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 p-2 w-full focus:outline-[#4fbf8b] rounded"
      /></div> }

     <div className='flex flex-col gap-1'> <label htmlFor="email" className='text-sm text-gray-700'>Email</label>
      <input
        type="email"
        name="email"
        placeholder='Enter your email'
        className="border p-2 placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 focus:outline-[#4fbf8b] w-full rounded"
      /></div>

    <div className='flex flex-col gap-1'> <label htmlFor="password"  className='text-sm text-gray-700'>Password</label>
      <input
        type="password"
        placeholder='Enter your password'
        name="password"
        className="border placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 p-2 w-full focus:outline-[#4fbf8b] rounded"
      /></div> 
      <div className='flex gap-1'> { login ? <span className='text-sm text-gray-700'>Create an account? </span>: <span className='text-sm whitespace-nowrap text-gray-700'>Already have account?</span>}<span className='text-[#4fbf8b] whitespace-nowrap cursor-pointer text-sm' onClick={()=>setLogin(prev => !prev)
}>click here</span></div>
   
     {login ? <div className='bg-[#4fbf8b] hover:bg-[#45a87a] cursor-pointer grid place-content-center py-2 rounded text-[14px] text-white font-medium' >Login</div>: <div className='bg-[#4fbf8b] hover:bg-[#45a87a] cursor-pointer grid place-content-center py-2 rounded text-[14px] text-white font-medium' >Create Account</div>}
    </div></div>
  );
};

export default LoginSignup;
