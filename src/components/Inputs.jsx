import React, { useEffect, useState } from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

export default function Inputs({setCity}) {
  const [newCity, setNewCity] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setNewCity(e.target.value)
  }

  const handleSearch = () => {
    setCity(newCity);
    setNewCity(""); // Set nilai input kembali ke string kosong setelah pengguna mengklik tombol cari
  }

  console.log(newCity)
  return (
    <div className='flex items-center gap-5 mt-3'>
      <input type="text" value={newCity} onChange={handleChange} placeholder='Cari kota...'
        className='tracking-widest py-1 px-2 w-10/12 outline-none text-gray-900 rounded-sm'
      />
      <button onClick={handleSearch}><UilSearch size={25} className="cursor-pointer hover:scale-125 duration-200 transition-all"/></button>
      <UilMapMarker size={25} className="cursor-pointer hover:scale-125 duration-200 transition-all"/>
    </div>
  )
}
