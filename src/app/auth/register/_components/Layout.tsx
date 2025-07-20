import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='grid grid-cols-[60fr_40fr] max-sm:grid-cols-1 w-full'>
        <div className='bg-img w-full max-sm:w-0 max-sm:h-0 transition-all duration-500 h-screen'></div>
        {children}
    </div>
  )
}
