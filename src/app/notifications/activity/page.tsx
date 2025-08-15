import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import RequestCard from '../components/RequestCard';

export default function Activity() {
  return <div className='flex flex-col gap-8'>
    <RequestCard type="model" img="/picture-2.jfif" status={"request"} name='Hazel Hazel' exp='23h, 4m' />
    <RequestCard type="fan" img='/picture-1.jfif' status={"request"} name='Maxwell Dickson' titles={["Model", "Artist", "Influencial"]}  exp='23h, 4m'/>
    <RequestCard type="fan" img='/picture-1.jfif' status={"accepted"} name='Maxwell Dickson' titles={["Model", "Artist", "Influencial"]}  exp='23h, 4m'/>
    <RequestCard type="fan" img='/picture-1.jfif' status={"completed"} name='Maxwell Dickson' titles={["Model", "Artist", "Influencial"]}  exp='23h, 4m'/>
    <RequestCard type="model" img="/picture-2.jfif" status={"expired"} name='Hazel Hazel' exp='23h, 4m' />
    <RequestCard type="fan" img='/picture-1.jfif' status={"declined"} name='Maxwell Dickson' titles={["Model", "Artist", "Influencial"]}  exp='23h, 4m'/>
    <RequestCard type="model" img="/picture-2.jfif" status={"completed"} name='Hazel Hazel' exp='23h, 4m' />
    <RequestCard type="fan" img='/picture-1.jfif' status={"canceled"} name='Maxwell Dickson' titles={["Model", "Artist", "Influencial"]}  exp='23h, 4m'/>
    <RequestCard type="model" img="/picture-2.jfif" status="accepted" name='Hazel Hazel' exp='23h, 4m' />
    <RequestCard type="model" img="/picture-2.jfif" status="canceled" name='Hazel Hazel' exp='23h, 4m' />
  </div>
}
