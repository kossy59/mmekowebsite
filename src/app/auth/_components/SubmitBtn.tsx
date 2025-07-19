import React from 'react'

export default function SubmitBtn({name, onSubmit}: {name: string, onSubmit?: (e: React.FormEvent) => void}) {
  return <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded'>{name}</button>
//   return <button type="submit" onClick={onSubmit} className='w-full bg-blue-500 text-white p-2 rounded'>{name}</button>

}
