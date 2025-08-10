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
import { isRegistered } from "@/lib/service/manageSession";



import type { Session } from "@/lib/context/auth-context";
type LoginResponse = Session & { accessToken?: string };

export const Loginview = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const {setIsLoggedIn, setStatus, isLoggedIn, status} = useAuth()
  const [user, setUser] = useState<{email: string, password: string}  | undefined>()

async function handleLogin(formData: FormData){
    if(!acceptedTerms) return    
    try{
      const {email, password} = login(formData) 
      setUser({ email, password });
      const res = await isRegistered({email,password}) as LoginResponse;
      if (res && res.email) {
        setIsLoggedIn(true);
        setLoginError(null);
        console.log("LOGIN SESSION OBJECT", res);
        // Map accessToken to token for AuthProvider compatibility
        const sessionObj = { ...res, token: res.accessToken };
        localStorage.setItem("session", JSON.stringify(sessionObj));
        console.log("LOGIN SESSION OBJECT (with token)", sessionObj);
      } else {
        setIsLoggedIn(false);
        setLoginError("Invalid email or password. Please try again.");
      }
    }catch(error){
      console.log(error)
    }finally{setTimeout(()=>{setStatus("resolved"); revalidate("/")},3000)}
  }

  function checkAcceptTerms(){
    if(acceptedTerms) setStatus("checking")
  }
  useEffect(()=>{
   async function createSession() {
     if(!user) return
     try{
       const result = await fetch(process.env.NEXT_PUBLIC_URL+"/api/session", {
           method: "POST",
           body: JSON.stringify(user),
           credentials: "include",
           headers: {
               "Content-Type": "application/json"
           }
       })
      const data = await result.text()
      console.log(data)
     }catch(error){
      console.log(error)
     }
   }
   createSession()
  },[user])

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

        {loginError && (
          <div className="bg-red-500 text-white rounded p-2 mb-3 text-center animate-pulse">
            {loginError}
          </div>
        )}
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
