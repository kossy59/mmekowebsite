"use client";
import { useAuth } from "@/lib/context/auth-context";
import Image from "next/image";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logins from "./Login";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isOpen, toggle } = useAuth();
  const router = useRouter()
  
  return (
    <div className="flex z-[999] w-full fixed top-0 left-0 p-2 items-center text-[#ff8a23] justify-between">
      <button onClick={toggle} className="navBtn">
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
      
      <Logins />
    </div>
  );
}
