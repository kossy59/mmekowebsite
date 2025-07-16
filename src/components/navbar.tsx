"use client";
import { useAuth } from "@/lib/context/auth-context";
import Image from "next/image";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, toggle } = useAuth();
  return (
    <div className="flex w-full fixed top-0 p-2 items-center justify-between">
      <button onClick={toggle}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
      <Image
        src={"/icons/icon-192.png"}
        alt="image"
        height={50}
        width={50}
        className="logo"
      />
      <div></div>
    </div>
  );
}
