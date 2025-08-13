import React from 'react'
import { Modelnotify } from './Notitification'
import { Allview } from './components/Allview'

export default function layout({children}: {children: React.ReactNode}) {
  return <Modelnotify>
    {children}
  </Modelnotify>
}
