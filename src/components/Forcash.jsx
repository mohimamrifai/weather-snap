import React from 'react'
import Box from './Box'

export default function Forcash({data}) {

  return (
    <div className='mt-3'>
      <h2 className='font-bold'>Perkiraan per 3 jam</h2>
      <div className='w-full h-[2px] bg-gray-200 mt-2
      '></div>
        <div className='flex items-center justify-between mt-3'>
        {data.map((d, index) => (
            <Box key={index} waktu={d.dt} icon={data[0].icon} temp={data[0].temp}/>
        ))}
        </div>
    </div>
  )
}
