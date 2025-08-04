import React from 'react'
import Tick from './Tick'

export default function Processing({loading}: {loading: boolean}) {
  return <div className={`w-full bg-gray-500/30 transition-all duration-500 ${loading ? "h-[25rem]" : "h-0 opacity-0"} flex items-center justify-center absolute bottom-0 left-0 z-[1000]`}>
    <Tick loading={loading}>
        <span className='text-2xl text-center w-full'>Just a moment!</span>
    </Tick>
  </div>

}
