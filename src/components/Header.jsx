import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-xl font-semibold">Workspace / Folder / Sheet</div>
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={() => console.log('Add clicked')}>
          + Add
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}
