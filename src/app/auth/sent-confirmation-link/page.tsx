// "use client"

// import { useState } from "react"
// import { close, type } from "../_utils/_types/constants"

// // import React, { useState, useEffect } from 'react'
// // import { Routes ,Route,useNavigate} from 'react-router-dom'
// // import { ToastContainer,toast } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css'
// // import {comfirmpasscode,error} from '@/services/features/register/registerSlice'
// // import {changeemailvery} from '@/services/features/register/registerSlice'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { close, type } from '@/utils/alert'
// // import { AppDispatch } from '@/app/store'

// export const PassEmail = ({setClosetoast,email,alert,dismissalert, close}: 
//   {setClosetoast: (closetoast: boolean)=>boolean, email: string, alert: (success: string, type: type, close: close)=>any, dismissalert: ()=>void, close: false}) => {
 
//     // const navigate = useNavigate();
//     // const dispatch = useDispatch<AppDispatch>()
//     // const errs = useSelector(error)
//     const [code,setcode] = useState<string>('')
//     // const stats = useSelector((state: any)=> state.register.conpasswordstate)
//     // const userID = useSelector((state: any)=> state.register.userID)
  
//   //  useEffect(()=>{
  
//   //   if(stats === "succeeded"){
//   //   console.log(userID)
//   //     alert(`succed`,'success',2000)
//   //     dismissalert();
      
//   //     navigate(`/newpassword/${userID}`)
//   //     close
//   //     setClosetoast(true)
  
//   //   }
//   //    if(stats === "failed"){
  
//   //     dismissalert()
//   //     alert(`${errs}`,'error',2000)
  
//   //   }
  
//   //  },[stats])
  
   
  
//   //   const checkCode = async ()=>{
//   //     if(!code){
//   //       toast.error("enter Email",{autoClose:1000})
//   //       return
//   //     }
  
//   //     if(stats.toString() !== "loading"){
//   //       alert('please wait..',"info",false)
//   //        dispatch(comfirmpasscode({email, code}))
//   //     }
  
//   //   }
  
//     return (
    
//       <div className='text-black mx-auto text-center bg-black my-auto overflow-hidden
//       border-0
//       '>
        
  
//           <p className='text-orange-500 text-xl font-bold'>Authenticate Email</p>
//           <p className='text-orange-500 text-sm '>Confirmation code has been sent to your Email</p>
  
//           <div className='mt-4 px-3'>
  
//                <input type="text" className='inpt'
//                placeholder='Enter Code'
//                onInput={(e)=>{
//                 setcode(e.currentTarget.value)
//                }}
//                >
//                </input>              
//                <button className='btn w-full mt-10 h-8 mb-3'
//               //  onClick={async ()=>{
//               //    await checkCode()
//               //  }}
//                >
//                 Confirm
//                </button> 
//           </div>
//       </div>
//     )
//   }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
