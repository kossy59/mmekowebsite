"use client"
import React, { useState, useEffect } from "react";
// import { Profilenav } from "./Profilenav";
import Sidemenu from "./Sidemenu";
import "../styles/Navs.css";
import { FaThLarge, FaTimes } from "react-icons/fa";
import "../styles/Gennav.css";
// import { useSelector, useDispatch } from "react-redux";
// import { Logins } from "../../auth/Logins";
// import { ModelSideMenu } from "./ModelSideMenu";

// interface NavappProps {
//   isOpen: boolean;
//   modelMenu: boolean;
//   click: boolean;
  // handleGenderSearchQuery: (query: string) => void;
  // stoptop: () => void;
  // setclick: (value: boolean) => void;
// }
 const Navapp = ({
  // isOpen,
  // click,
  // modelMenu,
  // handleGenderSearchQuery,
  // stoptop,
  // setclick,
}) => {
  // const login = useSelector((state) => state.register.logedin);
  const login = true; // Assuming login is true for demonstration purposes
  const [open, setOpen] = useState(false);
  const [modelToggle, setModelToggle] = useState(false);

  const handleMenubar = () => setOpen(!open);
  // const handleModelToggle = () => setModelToggle(!modelToggle);
  const toggleSidebar = () => setOpen(!open);

  // useEffect(() => {
  //   if (click) {
  //     setOpen(false);
  //     setclick(false);
  //   }
  // });

  return (
    <>
      <div className="">
        <button className="width bg-slate-50 flex items-center justify-center" onClick={toggleSidebar}>
          {open ? (
            <FaTimes size={24} color="#fff" />
          ) : (
            <FaThLarge className="w-8 h-8 text-gray-500" />
          )}
        </button>
      </div>

      <div
        className={`catorgry  ${open ? "catorgry-open" : "catorgry-closed"}`}
      >
        {/* {login && (
          <Profilenav
            handleMenubar={handleMenubar}
            isOpen={isOpen}
            modelMenu={modelMenu}
            handleModelToggle={handleModelToggle}
          />
        )} */}
        {login && (
          <Sidemenu
            open={open}
            handleMenubar={handleMenubar}
            // handleGenderSearchQuery={handleGenderSearchQuery}
          />
        )}
        {/* {login && <Sidemenu open={modelToggle} handleMenubar={handleModelToggle} handleGenderSearchQuery={handleGenderSearchQuery} />} */}
        {/* {login && (
              <ModelSideMenu
                open={modelToggle}
                handleMenubar={handleModelToggle}
                handleGenderSearchQuery={handleGenderSearchQuery}

              />
            )} */}
      </div>
    </>
  );
};


export default Navapp;