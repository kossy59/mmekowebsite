"use client"
import { set } from "date-fns";
import React, { createContext, useContext, useState } from "react";
// import { set_calling } from "../../app/features/message/messageSlice";

interface conextInterface { 
  trackopen: boolean;
  settrackOpens: (set: boolean) => void;
  closehomeopts: () => void;
  isReceivingCall: boolean; 
  triggerCall: (value: boolean) => void; 
  acceptCall: () => void; 
  declineCall: () => void; 
  setaccept: (accept: boolean) => void; 
  accept: boolean; 
  setcancel: (cancel: boolean) => void; 
  cancel: boolean;
  closeOption: () => void; 
  toggleoption: () => void;
  opening: boolean;
} 
const CallContext = createContext<conextInterface | undefined>(undefined);

export const CallProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReceivingCall, setIsReceivingCall] = useState(false);
  const [cancel, setcancel] = useState(false);
  const [accept, setaccept] = useState(false);
  const [opening, setopening] = useState(false);
  const [trackopen, settrackopen] = useState(false);
  
  const closeOption = () => {
    if(opening === true){
      setopening(false)
    }
  }; // Logic to accept call

  const toggleoption = () => {
    setopening(!opening)
   }; 

  const triggerCall = (value: boolean) => setIsReceivingCall(value);
  const acceptCall = () => {
   setaccept(true)
  }; // Logic to accept call
  const declineCall = () => {
   setcancel(true)
  }; // Logic to decline call

  const settrackOpens = (set: boolean)=>{
    settrackopen(set)
  }

  const closehomeopts = ()=>{
    if(trackopen === true){
      settrackopen(false)
    }
    
  }

  return (
    <CallContext.Provider
      value={{ 
        trackopen,
        settrackOpens,
        closehomeopts,
        isReceivingCall, 
        triggerCall, 
        acceptCall, 
        declineCall, 
        setaccept, 
        accept, 
        setcancel, 
        cancel,
        closeOption, 
        toggleoption,
        opening
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

export const useCall = () => {
  const context = React.useContext(CallContext);
  if (!context) {
    throw new Error("useCall must be used within a CallProvider");
  }
  return context;
};

export default CallProvider;
