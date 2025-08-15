import { request } from 'http';
import Image from 'next/image';
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const cardStates = {
  request: "Request sent",
  accepted: "Request accepted",
  declined: "Request declined",
  canceled: "Request canceled",
  expired: "Request expired",
  completed: "Request completed",
}
const statusArr = ["request", "expired", "completed", "accepted", "declined", "canceled"] 
interface CardProps {
    exp: string;
    children?: React.ReactNode;
    type: "fan" | "model";
    titles?: string[];
    name: string;
    img: string;
    status: "request" | "expired" | "completed" | "accepted" | "declined" | "canceled";
}

export default function RequestCard({exp, img, name, titles=["fan"], status, type="fan"}: CardProps) {
  return <div className={`max-w-[26rem] flex flex-col gap-8 rounded-lg border-2 ${type === "model" ? "border-blue-500" : "border-yellow-500"} p-4 mx-auto text-white bg-slate-800`}
  >
      <div className={`flex justify-between text-5xl ${type === "model" ? "text-blue-500" : "text-yellow-500"}`}>
        <div>
          <div className={`size-16 relative rounded-full border-4 overflow-hidden ${type === "model" ? "border-blue-500" : "border-yellow-500"} bg-gray-900`}>
            <Image src={img} width={100} alt="picture" height={100} className='absolute top-0 left-0 size-full object-cover' />
          </div>
          <div className='text-sm'>
            <p className='font-bold'>{name}</p>
            <div className='flex gap-1'>{titles?.map((title, i)=> i === titles.length -1 ? <p key={title}>{title}</p> : <p key={title}>{title} &#x2022; </p>)}</div>
          </div>
        </div>
        <BiTimeFive />
      </div>
      <h3 className={`text-4xl ${type === "model" ? "text-blue-500" : "text-yellow-500"}`}>{
       type === "model" ?
        'New Fan Meet Request'
       : 'Waiting For Model\'s Response' 
      }</h3>
      <p>{ type === "model" ?
        "You've received a fan meet request. Please accept or decline within 24 hours."
        : "Your fan meet request has been sent. The model has 24 hours to respond."
        }</p>
      <div className={`flex justify-between gap-6 ${type === "model" && "max-[490px]:flex-col"} items-end`}>
        { statusArr.slice(1).includes(status) ? 
        <div className={`flex gap-4 ${type === "model" && "max-[490px]:w-full"}`}>
          <div className='border border-gray-600 text-gray-500 px-6 py-2 rounded-lg'>
            {cardStates[status as keyof typeof cardStates]}
          </div> 
          {type === "fan" && <FanActionBtn label='Renew request' />}
        </div>
          : <>
          <div className='flex flex-col min-w-28 '>
          <p className='text-xl'>Expires in:</p>
          <p className='text-3xl'>{exp}</p>
          </div>
          <div className={`flex gap-4 ${type === "model" && "max-[490px]:w-full"}`}>
            { type === "model" ?
            <>
            <ModelActionBtn type='accept' />
            <ModelActionBtn type='decline' />
            </>
            : <div className='text-yellow-500 text-2xl flex flex-col items-end gap-4'>
              <BiTimeFive />
              {type === "fan" && status === "request" && <FanActionBtn label='Terminate request' />}
              </div>
            }
          </div>
          </>
        }
    </div>
   </div>
}

function ModelActionBtn({type}: {type: "accept" | "decline"}){
  return <button className={`py-3 w-full px-6 rounded-lg transition-all duration-500 text-white ${type === "accept" ? "hover:bg-green-700  bg-green-600" : "hover:bg-red-700  bg-red-600"}`}>
    {type === "accept" ? "Accept" : "Decline"}
  </button>
};

function FanActionBtn({label}: {label: string}){
  return <button className='border border-gray-500 max-[490px]:text-xs text-sm transition-all duration-500 hover:bg-slate-700 text-gray-300 px-6 py-2 rounded-lg'>{label}</button>
}