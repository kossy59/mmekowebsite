import { CallProvider } from '@/Context/callContext'
import React from 'react'
import { Profile } from '../_components/ProfilePage'

export const meta = {
    title: "profile account",
}
export const dynamic = 'force-dynamic';

export default function page() {
  return <CallProvider>
    {/* <div>profile page</div> */}
    <Profile />
  </CallProvider>
  
}
