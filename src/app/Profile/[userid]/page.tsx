import { CallProvider } from '@/Context/callContext'
import React from 'react'
import { Profile } from './ProfilePage'

export const meta = {
    title: "profile account",
}
export default function page() {
  return <CallProvider>
    <Profile />
  </CallProvider>
  
}
