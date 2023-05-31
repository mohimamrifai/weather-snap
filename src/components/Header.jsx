import React from 'react'

const citys = [
    {
        id: 1,
        name: "jakarta"
    },
    {
        id: 2,
        name: "bandung"
    },
    {
        id: 3,
        name: "bekasi"
    },
    {
        id: 4,
        name: "medan"
    },
    {
        id: 5,
        name: "surabaya"
    },
]

export default function Header({setCity}) {
  return (
    <div className='flex flex-row flex-wrap justify-between gap-2 items-center my-3'>
      {citys.map((c) => (
        <button onClick={() => setCity(c.name)} className='bg-blue-500 py-1 px-2 rounded-sm cursor-pointer capitalize' key={c.id}>{c.name}</button>
      ))}
    </div>
  )
}
