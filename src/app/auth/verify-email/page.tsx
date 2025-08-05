"use client"
import { useEffect, useState } from "react";
import "../register/styles.css"
// import type Ref from ""
// import { close, type } from "../_utils/_types/constants"

// import React, { useState, useEffect } from 'react'
// import { Routes ,Route,useNavigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import axios from "axios";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";
import Tick from "@/components/tick-animation/Tick";
// import 'react-toastify/dist/ReactToastify.css'
// import {comfirmpasscode,error} from '@/services/features/register/registerSlice'
// import {changeemailvery} from '@/services/features/register/registerSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { close, type } from '@/utils/alert'
// import { AppDispatch } from '@/app/store'

// export const PassEmail = ({setClosetoast,email,alert,dismissalert, close}: 
//   {setClosetoast: (closetoast: boolean)=>boolean, email: string, alert: (success: string, type: type, close: close)=>any, dismissalert: ()=>void, close: false}) => {
type PassCodeInputProps = React.ComponentPropsWithoutRef<'input'>
export default function ConfirmPassCode(){
  const [codeComplete, setCodeComplete] = useState('')
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("")
  const [isRegisterComplete, setIsRegisterComplete] = useState(false)
  const searchParams = useSearchParams()
  const email: string | null = searchParams.get("email")
  const router = useRouter()

  useEffect(()=>{
    isRegisterComplete && setTimeout(()=> {
      router.push("/")
      setCodeComplete("")
    }, 3000)
  }, [isRegisterComplete])
  
    function handleChange(e: React.FormEvent<HTMLFormElement>) {
      const target = e.target as HTMLInputElement;

      if (!target.classList.contains('code-input')) return;

      const value = target.value.replace(/[^0-9]/g, '');

      target.value = value;

      if (value.length === 1) {
        const form = e.currentTarget;
        const inputs = Array.from(form.querySelectorAll<HTMLInputElement>('.code-input'));
        const index = inputs.indexOf(target);

        if (index < inputs.length - 1) {
          inputs[index + 1].value || index === (inputs.length -1) && inputs[index].value ?  inputs.find(v=> v.value === "")?.focus() : 
          inputs[index + 1].focus();
        }
        if(inputs.every(v=> v.value.length > 0)) {
          const code = inputs.map(v=> v.value).join("")
          setCodeComplete(code)
        }
      }
    }

    async function handleSubmitCode(){
      if(codeComplete.length < 5) return toast.error("Code is incomplete")
        setStatus("checking")
        try{
          await axios.post(process.env.NEXT_API+"/verifyemail", {email, code: codeComplete}, {withCredentials: true})
          setIsRegisterComplete(true)
        }catch(error){
          console.log(error)
          setError("Something Went Wrong!")
          setCodeComplete("")
        }finally{
          setStatus("resolved")
        }
    }
  
    return (
    
      <div className='text-black mx-auto text-center overflow-hidden border-0 pt-16'>
          <p className='text-orange-500 text-xl font-bold'>Confirm Your Email</p>
          <p className='text-orange-500 text-sm '>Enter the confirmation code sent to your email</p>
  
          {!isRegisterComplete && ["resolved", "idle"].includes(status) ? <div className='mt-4 px-3 flex flex-col items-center gap-8'>
          <form onChange={handleChange} className="flex gap-4 mt-8">
              <PassCodeInput />  
              <PassCodeInput />  
              <PassCodeInput />  
              <PassCodeInput />  
              <PassCodeInput />  
              <PassCodeInput />  
          </form>

          <button 
          onClick={handleSubmitCode} className=' bg-gray-700 text-white hover:bg-orange-600/50 duration-500 transition-all px-10 py-3 w-fit rounded-lg'>
           Confirm
          </button> 
          <p className=" text-red-600">{error}</p>
          </div> :
          <div className="mt-11 w-full flex flex-col items-center justify-center ">
            <Tick loading={isRegisterComplete}>
              {isRegisterComplete && <p className="text-green-600 text-xl">Congrats! Your account is ready</p>}
            </Tick>
          </div>
          }
      </div>
    )
  }

  function PassCodeInput() {
    return (
      <input
        inputMode="numeric"
        type="text"
        maxLength={1}
        className="code-input size-12 rounded-lg border bg-transparent text-white flex justify-center items-center text-2xl text-center"
      />
    );
  }
