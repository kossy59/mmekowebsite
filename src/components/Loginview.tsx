"use client";
import Link from "next/link";
import React, { useActionState, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Input from "./Input";
import { login } from "@/lib/service/login";
import Processing from "./tick-animation/LoginProcessing";
import { useAuth } from "@/lib/context/auth-context";
import { revalidate } from "@/lib/utils/revalidate";
import axios from "axios";



export const Loginview = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const {setIsLoggedIn, setStatus, isLoggedIn, status} = useAuth()

  async function handleLogin(formData: FormData){
    if(!acceptedTerms) return    
    try{
      const {email, password} = login(formData) 
      const res = await axios.post(process.env.NEXT_PUBLIC_API+"/login", {email, password}, {withCredentials: true})
      setIsLoggedIn(true)
      console.log(res.data)
    }catch(error){
      console.log(error)
    }finally{setTimeout(()=>{setStatus("resolved"); revalidate("/")},3000)}
  }

  function checkAcceptTerms(){
    if(acceptedTerms) setStatus("checking")
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        margin: "0 10px",
        width: "90%",
        maxWidth: "450px",
      }}
    >
      <ToastContainer position="top-center" theme="dark" />
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-orange-500 text-3xl font-bold text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Log in to access your account
        </p>

        <form action={handleLogin} className="mt-6 space-y-4">
          <Input type="email" placeholder="Email Address" />
          <Input type="password" />
          <input type="hidden" name="signing-type" value={"login"} />
          <div className="flex items-start mt-4">
            <Input
              type="checkbox"
              id="terms"
              overide={true} // overide classNames
              classNames="mr-2"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I accept the{" "}
              <span
                className="text-orange-500 underline cursor-pointer"
                // onClick={() => navigate("/term_condition")}
              >
                Terms and Conditions
              </span>
            </label>
          </div>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded shadow transition"
            onClick={checkAcceptTerms}
          >
            Log In
          </button>

          <p
            className="text-blue-500 text-sm text-center hover:text-blue-400 cursor-pointer"
            // onClick={forget}
          >
            Forgot Password?
          </p>

          <p className="text-gray-400 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              className="text-orange-500 font-bold hover:underline cursor-pointer"
              href="/auth/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      {/* Loading/processing */}
      <Processing status={status} isLoggedIn={isLoggedIn} />
    </div>
  );
};
