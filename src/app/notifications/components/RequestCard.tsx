import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

interface CardProps {
    exp: string;
    children?: React.ReactNode
    type: "fan" | "model"
}

export default function RequestCard({exp, children, type="fan"}: CardProps) {
  return <div className={`max-w-[26rem] flex flex-col gap-8 rounded-lg border-2 ${type === "model" ? "border-blue-500" : "border-yellow-500"} p-4 mx-auto text-white bg-slate-800`}
  >
      <div className={`flex justify-end text-5xl ${type === "model" ? "text-blue-500" : "text-yellow-500"}`}>
        <BiTimeFive />
      </div>
      <h3 className={`text-4xl ${type === "model" ? "text-blue-500" : "text-yellow-500"}`}>{
       type === "model" ?
        'New Fan Meet Request'
       : 'New Fan Meet Request' 
      }</h3>
      <p>{ type === "model" ?
        "You've received a fan meet request. Please accept or decline within 24 hours."
        : "You've received a fan meet request. Please accept or decline within 24 hours."
        }</p>
      <div className='flex justify-between gap-6'>
        <div className='flex flex-col'>
          <p className='text-xl'>Expires in:</p>
          <p className='text-3xl'>{exp}</p>
        </div>
        <div className='flex gap-4'>
          { type === "model" ?
          <>
            <button className='py-3 px-6 rounded-lg text-white bg-green-600'>Accept</button>
            <button className='py-3 px-6 rounded-lg text-white bg-red-600'>Decline</button>
          </>
          : <div className='text-yellow-500 text-2xl'><BiTimeFive /></div>
          }
      </div>
    </div>
   </div>
}
