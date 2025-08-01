import React from 'react'
import { createContext } from 'react';

interface MenuContextProps {   
    open: boolean;
    toggleMenu: (e?: React.MouseEvent<HTMLElement>) => void;
}
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    const target = e?.target as HTMLButtonElement;
    if (target?.classList.contains("mini-btn")) return;
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
