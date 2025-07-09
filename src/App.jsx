import React from 'react'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Tabs from './components/Tabs'
import DataTable from './components/DataTable'

export default function App() {
  return (
    <div className="p-4">
      <Header />
      <Toolbar />
      <Tabs />
      <DataTable />
    </div>
  )
}
