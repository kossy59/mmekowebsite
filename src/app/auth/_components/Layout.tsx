import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='grid grid-cols-[60fr_40fr] min-h-screen w-full'>
        <div className='bg-img bg-slate-500 flex-1'></div>
        {children}
    </div>
  )
}
