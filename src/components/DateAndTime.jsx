import React from 'react'

export default function DateAndTime({data}) {
  return (
    <div className='mt-10'>
      <h2 className='text-2xl text-center font-normal text-gray-100'>{data.formattedDate}</h2>
    </div>
  )
}
