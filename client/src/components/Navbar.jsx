import React,{useContext, useEffect} from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search_icon.svg";
import cart from "../assets/nav_cart_icon.svg";
import menu from "../assets/menu_icon.svg";
import {useState} from "react";
import Modal from '@mui/material/Modal';
import LoginSignup from "./LoginSignup";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius:"10px",
  outline: 'none',


};

const Navbar = () => {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { search, setSearch,cartQuantity } = useContext(ThemeContext);
 

  return (
    <>
      <div className="flex justify-center w-[100vw]">
        <div className="flex justify-between xl:w-[80vw] w-[95vw] h-[80px] items-center">
          <Link to="/">
            {" "}
            <div>
              <img src={logo} className="w-34 md:w-38 cursor-pointer" alt="" />
            </div>
          </Link>
          <div className="flex xl:gap-8 md:gap-4 gap-6 items-center ">
            <div className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs hidden md:flex cursor-pointer opacity-80">
              Seller Dashboard
            </div>
            <a href="/" className="text-gray-700 text-[16px] hidden md:flex">
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 text-[16px] hidden md:flex"
            >
              All Products
            </a>
         <div className=" items-center lg:flex  hidden justify-between px-3 py-1 border border-gray-300 rounded-full">
              <input
                type="text"
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search products"
                className="outline-none placeholder:text-[14px]"
              />
              <img src={search} alt="" />
            </div>

            <Link to="/cart"> <div className=" cursor-pointer relative">
           { cartQuantity>0 &&  <div className="h-[18px] flex items-center justify-center rounded-full w-[18px] absolute -right-2 -top-2  text-[12px] bg-[#4fbf8b] text-white">
                {cartQuantity}
              </div>}{" "}
              <img src={cart} alt="" />
            </div></Link>

            <div onClick={handleOpen} className="cursor-pointer px-8 py-2 hidden md:flex bg-[#4fbf8b] hover:bg-[#45a87a] transition text-white rounded-full">
              Login
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginSignup/>
        </Box>
      </Modal>
            <div className="md:hidden">
              <img src={menu} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-0.25 bg-gray-300 border-0" />
    </>
  );
};

export default Navbar;
