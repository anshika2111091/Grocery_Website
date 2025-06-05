import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [cartQuantity,setCartQuantity]=useState(0);
  return (
    <ThemeContext.Provider value={{ setSearch, search ,cartQuantity,setCartQuantity}}>
      {children}
    </ThemeContext.Provider>
  );
};
