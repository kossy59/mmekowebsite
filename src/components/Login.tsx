"use client"
import { FaSignInAlt } from "react-icons/fa";
import Popup from "reactjs-popup";
import { Loginview } from "./Loginview";

export default function Logins() {
  return (
    <div className="">
       
      <Popup 
        modal nested
        trigger={<button className="btn" 
          style={{display:'flex', alignItems:'center', color:'#f97316', gap:10,padding:'10px 15px', borderRadius:20}}> 
          <FaSignInAlt size={24}  />
        </button>} 
        >
          <div className=" w-2/3">
            <Loginview />
          </div>
      </Popup>
    </div>
  );
};
