import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import RequestCard from '../components/RequestCard';

export default function Activity() {
  return <div className='flex flex-col gap-8'>
    <RequestCard type="model" exp='23h, 4m' />
    <RequestCard type="fan" exp='23h, 4m'/>
    <RequestCard type="model" exp='23h, 4m' />
  </div>
}
