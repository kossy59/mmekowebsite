import React from 'react'
import { createContext } from 'react';

interface MenuContextProps {   
    open: boolean;
    toggleMenu: () => void;
}
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <MenuContext.Provider value={{ open, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export default MenuProvider;
