import React from 'react'
import Input from './Input';
import SubmitBtn from './SubmitBtn';

// const inputStyle = 'w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500';

export default function AuthForm({type = "register", onSubmit, link}: {type: "register" | "login", onSubmit?: (e: React.FormEvent) => void, link: any}) {

  return <div className='w-full'>
            <div className='flex pt-[3rem] justify-center h-full'>
                <div className='bg-[#080a1d] text-white p-8 rounded-lg shadow-md w-96 h-fit'>
                <h2 className='text-2xl font-bold mb-4'>{type.substring(0,1).toLocaleUpperCase() + type.substring(1)}</h2>
                <form onSubmit={onSubmit}>
                    {type === "register" && <Input type='text' name='username' placeholder='Username' />}
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    {type === "register" && <Input type='password' placeholder='Confirm Password' />}
                    <SubmitBtn name={type === "login" ? 'Login' : 'Register'} />
                </form>
                <div className='w-full flex justify-center mt-8'>{link}</div>
                </div>
            </div>
        </div>
}
