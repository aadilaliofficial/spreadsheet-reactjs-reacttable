import React from 'react'

export default function Toolbar() {
  const tools = ['Hide Fields', 'Sort', 'Filter', 'Cell View']

  return (
    <div className="flex gap-4 mb-4">
      {tools.map((tool) => (
        <button
          key={tool}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => console.log(tool + ' clicked')}
        >
          {tool}
        </button>
      ))}
    </div>
  )
}
