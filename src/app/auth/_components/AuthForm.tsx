import React from 'react'
import Input from './Input';
import SubmitBtn from './SubmitBtn';

export default function AuthForm({type = "register", onSubmit, link}: {type: "register" | "login", onSubmit?: (e: React.FormEvent) => void, link: any}) {

  return <div className={`w-full p-8 relative max-sm:h-screen max-sm:bg-[url("/register.png")] bg-cover bg-center bg-no-repeat transition-all duration-500`}>
            <div className='flex justify-center h-full opacity-100'>
                <div className='bg-[#080a1d] text-white p-8 rounded-lg shadow-md w-96 max-[490px]:w-full h-fit'>
                <h2 className='text-2xl font-bold mb-4'>{type.substring(0,1).toLocaleUpperCase() + type.substring(1)}</h2>
                <form onSubmit={onSubmit}>
                    {type === "register" && <Input type='text' name='username' placeholder='Username' />}
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    {type === "register" && <Input type='password' placeholder='Confirm Password' />}
                    <SubmitBtn name={type === "login" ? 'Login' : 'Register'} />
                </form>
                <div className='w-full flex justify-center mt-8 flex-col items-center gap-2'>
                    {type === "register" && 
                        <label>
                            <input type="checkbox" className='mr-2' />
                            I agree to the <a href="#" className='text-orange-600 hover:text-blue-600'>terms and conditions</a>
                        </label>}
                    {link}
                </div>
                </div>
            </div>
        </div>
}
