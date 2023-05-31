import React from 'react'
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilArrowUp , UilArrowDown  } from '@iconscout/react-unicons'

export default function CityDetails({data}) {
    return (
        <div className='p-5'>
            <p className='text-center font-semibold text-2xl'>{data.nameCity}, {data.country}</p>
            <p className='text-center mt-5 mb-10 text-xl text-blue-100'>{data.description}</p>
            <div className='flex justify-between items-center mt-3'>
                <img src={`http://openweathermap.org/img/w/${data.icon}.png`} alt="asd" className='w-[100px]' />
                <p className='text-3xl ms-8 font-semibold'>{parseInt(data.temp)}°</p>
                <div className='flex flex-col items-start gap-2 text-sm'>
                    <div className='flex flex-row-reverse gap-2 items-center'>
                        <p>Dirasakan : {parseInt(data.feels_like)}°</p>
                        <UilTemperature size={20} />
                    </div>
                    <div className='flex flex-row-reverse gap-2 items-center'>
                        <p>Kelembaban : {data.humidity}%</p>
                        <UilTear size={20} />
                    </div>
                    <div className='flex flex-row-reverse gap-2 items-center'>
                        <p>Angin : {data.windSpeed} m/s</p>
                        <UilWind size={20} />
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-5 text-gray-100'>
                <div className='flex gap-2'>
                    <UilSun size={20} />
                    <p>Rise : {data.sunrise}</p>
                </div>
                |
                <div className='flex gap-2'>
                    <UilSunset size={20} />
                    <p>Set : {data.sunset}</p>
                </div>
                |
                <div className='flex gap-2'>
                    <UilArrowUp size={20} />
                    <p>High : {parseInt(data.temp_max)}°</p>
                </div>
                |
                <div className='flex gap-2'>
                    <UilArrowDown size={20} />
                    <p>Low : {parseInt(data.temp_min)}°</p>
                </div>
            </div>
        </div>
    )
}
