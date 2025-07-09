import React, { useState } from 'react'

const tabNames = ['All Orders', 'Pending', 'Reviewed', 'Arrived']

export default function Tabs() {
  const [active, setActive] = useState('All Orders')

  return (
    <div className="flex gap-4 mb-4 border-b">
      {tabNames.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 ${active === tab ? 'border-b-2 border-blue-600 font-semibold' : ''}`}
          onClick={() => {
            setActive(tab)
            console.log(tab + ' tab selected')
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
