import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  return (
    <ThemeContext.Provider value={{ setSearch, search }}>
      {children}
    </ThemeContext.Provider>
  );
};
