import React,{useState,useEffect} from "react";
import { assets } from "../assets/assets";
import star from "../assets/star_icon.svg";
import cart from "../assets/cart_icon.svg";
import star_dull from "../assets/star_dull_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const ItemCard = ({ item }) => {
  const  [count,setCount]=useState(0);
    const { setCartQuantity,cartQuantity } = useContext(ThemeContext);
  const notify = (e) => {

    e.stopPropagation();

    handleIncrement();
   
  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${item._id}`);
  };

  const handleQuantity=()=>{
    if(count<0)
      setCount(0);
    if(count>item.quantity){
      setCount(item.quantity);
      toast.error("Item out of stock", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    })
    }
    
  }

  useEffect(()=>{
    handleQuantity();
  },[count])

  const handleIncrement=()=>{
    if(count+1<item.quantity)
{setCount((prev)=>prev+1);
setCartQuantity((prev)=>prev+1);
toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    })}
    else toast.error("Item out of stock", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    })
  }
  const handleDecrement=()=>{
    setCount((prev)=>prev-1);
    setCartQuantity((prev)=>prev-1);
    toast.success("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    })
  }

  return (
    <div
      onClick={() => handleCardClick()}
      className="sm:px-3 px-2 py-4 border cursor-pointer border-gray-300 rounded-[5px] flex flex-col "
    >
      <ToastContainer />
      <div className="flex justify-center">
        <img
          className="hover:scale-110 duration-200 transition-transform"
          src={item.image[0]}
          width={130}
          height={130}
          alt=""
        />
      </div>

      <p className="text-gray-400 md:text-[14px] text-[8px]">{item.category}</p>
      <p className="md:text-[18px] font-medium text-[12px]">{item.name}</p>
      <div className="flex gap-0.5">
        {[...Array(4)].map((_, index) => (
          <img
            src={star}
            className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]"
          />
        ))}
        {[...Array(1)].map((_, index) => (
          <img
            src={star_dull}
            className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]"
          />
        ))}{" "}
        <p className="text-gray-400">(4)</p>
      </div>
      <div className="flex gap-10 mt-2 w-[100%] justify-between">
        <div className="flex items-end gap-1">
          <p className="text-[#4fbf8b] text-[20px] font-semibold">
            ${item.price}
          </p>
          <p className="text-[15px] text-gray-400 line-through">
            ${item.offerPrice}
          </p>
        </div> 
        {count<1 ? <> <div onClick={notify}  className="flex items-center cursor-pointer justify-center gap-2 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded">
                <img src={cart} width={15} height={15} alt="" />
                <p  className='text-[14px] text-[#4fbf8b]'>Add</p>
            </div> </> :
       
        <div className="flex items-center  text-[#4fbf8b] cursor-pointer justify-around  bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded">
          <div onClick={handleDecrement}>-</div>
          <div>{count}</div>
          <div onClick={handleIncrement}>+</div>
        </div>}
      </div>
    </div>
  );
};

export default ItemCard;
