"use client";
import { FaSignInAlt } from "react-icons/fa";
// import Popup from ;
import { Loginview } from "./Loginview";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useAuth } from "@/lib/context/auth-context";
// import { status } from "@/constants/status";

const Popup = dynamic(()=> import("reactjs-popup"), {ssr: false,})

export default function Logins() {
  const {status} = useAuth()
  
  return (
    <div className="">
      <Popup
        open={!["idle","resolved"].includes(status)}
        modal
        nested
        trigger={
          <button
            className="btn bg-[#f97316] mr-2 text-white hover:bg-[#f97316] hover:text-white active:bg-[#f97416d5] active:text-white focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-opacity-50 rounded-full"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: 20,
            }}
          >
            <FaSignInAlt size={24} />
          </button>
        }
      >
        <div className=" w-2/3">
          <Loginview />
        </div>
      </Popup>
    </div>
  );
}
