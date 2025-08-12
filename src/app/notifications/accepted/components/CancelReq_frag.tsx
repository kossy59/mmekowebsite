import React from 'react'

export const CancelReq_frag = ({setbutton, cancel_req}: {setbutton: (cancel_req: boolean)=> void, cancel_req: ()=>void}) => {
  return (
    <div className='w-80 h-60 bg-pink-300 absolute bottom-1/2 md:left-1/4 md:right-1/2 sm:left-9 sm:right-9 z-30 rounded-lg shadow shadow-white flex flex-col'>
        <div className='w-full h-full flex flex-col mt-16'>
            <p className='block ml-1 mr-1 text-white font-bold mb-3 text-center'>
              Cancelling this request cannot be undone!
            </p>

            <p className='block ml-1 mr-1 text-red-600 font-bold mb-3 text-center'>
              Do you wish to continue?
            </p>
            
        </div>

        <div className='w-full flex flex-row mt-3 justify-between mb-4'>
            <button className=' text-white font-bold text-center ml-6 bg-blue-600 rounded-md shadow shadow-white p-2'
            onClick={(e)=>{
                setbutton(false)
            }}
            >
              No
            </button>

            <button className=' text-white font-bold text-center mr-6 bg-red-600 rounded-md shadow shadow-white p-2' onClick={(e)=>{
                setbutton(false)
                
            }}>
              Yes
            </button>
            
        </div>
    </div>
  )
}
