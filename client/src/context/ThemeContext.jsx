import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();
import { dummyProducts } from '../assets/assets';

export const ThemeProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [items,setItems]=useState(dummyProducts);
  const [cartQuantity,setCartQuantity]=useState(0);
  return (
    <ThemeContext.Provider value={{ setSearch, search ,cartQuantity,setCartQuantity,items,setItems}}>
      {children}
    </ThemeContext.Provider>
  );
};
