import React, { useMemo, useState, useCallback } from 'react'
import { useTable } from 'react-table'
import initialData from '../data/mockData'

export default function DataTable() {
  const [data, setData] = useState(initialData)

  const handleAdd = () => {
    const newRow = {
      job: '',
      submitted: '',
      status: '',
      submitter: '',
      url: '',
      assigned: '',
      priority: '',
      due: '',
      value: ''
    }
    setData((prev) => [...prev, newRow])
    console.log('Added new row')
  }

  const handleDelete = useCallback((index) => {
    setData((prev) => prev.filter((_, i) => i !== index))
    console.log('Deleted row', index)
  }, [])

  const updateCell = useCallback((rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    )
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: '',
        id: 'checkbox',
        Cell: () => <input type="checkbox" />
      },
      {
        Header: 'Job Request',
        accessor: 'job',
        Cell: ({ value, row }) => (
          <input
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'job', e.target.value)}
          />
        )
      },
      {
        Header: 'Submitted',
        accessor: 'submitted',
        Cell: ({ value, row }) => (
          <input
            type="date"
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'submitted', e.target.value)}
          />
        )
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value, row }) => (
          <select
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'status', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Arrived">Arrived</option>
          </select>
        )
      },
      {
        Header: 'Submitter',
        accessor: 'submitter',
        Cell: ({ value, row }) => (
          <input
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'submitter', e.target.value)}
          />
        )
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({ value, row }) => (
          <input
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'url', e.target.value)}
          />
        )
      },
      {
        Header: 'Assigned',
        accessor: 'assigned',
        Cell: ({ value, row }) => (
          <input
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'assigned', e.target.value)}
          />
        )
      },
      {
        Header: 'Priority',
        accessor: 'priority',
        Cell: ({ value, row }) => (
          <select
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'priority', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        )
      },
      {
        Header: 'Due Date',
        accessor: 'due',
        Cell: ({ value, row }) => (
          <input
            type="date"
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'due', e.target.value)}
          />
        )
      },
      {
        Header: 'Est. Value',
        accessor: 'value',
        Cell: ({ value, row }) => (
          <input
            className="w-full"
            value={value}
            onChange={(e) => updateCell(row.index, 'value', e.target.value)}
          />
        )
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <button
            className="text-red-500 hover:underline"
            onClick={() => handleDelete(row.index)}
          >
            🗑 Delete
          </button>
        )
      }
    ],
    [handleDelete, updateCell]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    autoResetPage: false
  })

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          className="bg-green-600 text-white px-3 py-1 rounded"
          onClick={handleAdd}
        >
          + Add Row
        </button>
      </div>
      <table {...getTableProps()} className="w-full text-left border">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <th {...col.getHeaderProps()} className="p-2 border-b">
                  {col.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 border-b">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
