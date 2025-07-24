import React from 'react'
import NavigateBack from './NavigateBtn'

export default function Head({heading}: {heading: string}) {
  return <header className="flex items-center gap-4">
        <NavigateBack />
      <h4 className="text-lg font-bold text-white">{heading}</h4>
    </header>
}
