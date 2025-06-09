import React from "react";
import star from "../assets/star_icon.svg";
import cart from "../assets/cart_icon.svg";
import star_dull from "../assets/star_dull_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


const ItemCard = ({ item }) => {
  const { setCartQuantity,items,setItems} = useContext(ThemeContext);

  const notify=(e) => {
    e.stopPropagation();
    handleIncrement();    
  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${item._id}`);
  };

  const handleIncrement = (e) => {
  
    if(item.selectedQuantity>item.quantity){
      const updatedItems=items.map((element)=>element.id===item.id ? {...element,selectedQuantity:item.quantity}:element)
      setItems(updatedItems);
      toast.error("Item out of stock", {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      hideProgressBar: true,
    })
    }
    if (item.selectedQuantity + 1 <= item.quantity) {
      const updatedItems = items.map((element) =>
        element._id === item._id
          ? { ...element, selectedQuantity: item.selectedQuantity + 1 }
          : element
      );
      setItems(updatedItems);
      setCartQuantity((prev) => prev + 1);
      toast.success("Item added to cart", {
        position: "top-center",
        autoClose: 1000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    } else {
      toast.error("Item out of stock", {
        position: "top-center",
        autoClose: 1000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  };
  
  const handleDecrement=(e)=>{

    if(item.selectedQuantity<0)
      {
        const updatedItems=items.map((element)=>element._id===item._id ? {...element,selectedQuantity:0}:element)
        setItems(updatedItems)
      }
    setCartQuantity((prev)=>prev-1);
    const updatedItems=items.map((element)=>element._id===item._id ? {...element,selectedQuantity:item.selectedQuantity-1}:element)
    setItems(updatedItems);
    toast.success("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    })
  }
  const stopNavigation=(e)=>{
    e.stopPropagation();
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
        {item.selectedQuantity<1 ? <> <div onClick={notify}  className="flex z-30 items-center cursor-pointer justify-center gap-2 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded">
                <img src={cart} width={15} height={15} alt="" />
                <p  className='text-[14px] text-[#4fbf8b]'>Add</p>
            </div> </> :
       
        <div onClick={stopNavigation} className="flex items-center  text-[#4fbf8b] cursor-pointer justify-around  bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded">
          <div onClick={handleDecrement}>-</div>
          <div>{item.selectedQuantity}</div>
          <div onClick={handleIncrement}>+</div>
        </div>}
      </div>
    </div>
  );
};

export default ItemCard;
