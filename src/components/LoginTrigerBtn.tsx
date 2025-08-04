import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'

export default function LoginTrigerBtn() {
  return <button
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
