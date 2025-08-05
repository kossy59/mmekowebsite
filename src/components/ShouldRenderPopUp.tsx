"use client"
import { useAuth } from '@/lib/context/auth-context'
import React from 'react'
import { PopUp } from './popup'

export default function ShouldRenderPopUp() {
  const {popup} = useAuth()
  if(popup === "open") return <PopUp />
  return null
}
