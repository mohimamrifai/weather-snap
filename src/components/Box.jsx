import React from 'react'

export default function Box({waktu, icon, temp}) {
  return (
    <div className='flex flex-col items-center'>
      <p>{waktu} wib</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="asd" />
      <p>{parseInt(temp)}°</p>
    </div>
  )
}
