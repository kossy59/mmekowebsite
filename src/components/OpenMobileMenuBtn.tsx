"use client"
import { useMenuContext } from '@/lib/context/MenuContext';
import React from 'react'
import { FaThLarge, FaTimes } from 'react-icons/fa';

export default function OpenMobileMenuBtn() {
    const { toggleMenu, open } = useMenuContext();
  return (
    <button className="width flex items-center justify-center" onClick={toggleMenu}>
      {open ? (
        <FaTimes size={24} color="#fff" />
      ) : (
        <FaThLarge className="w-8 h-8 text-gray-400" />
      )}
    </button>
  );
}
