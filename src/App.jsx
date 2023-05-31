import { useEffect, useState } from 'react'
import './App.css'
import CityDetails from './components/CityDetails'
import DateAndTime from './components/DateAndTime'
import Forcash from './components/Forcash'
import Header from './components/Header'
import Inputs from './components/Inputs'
import { getHourlyForcase, getdata } from './weatherService'
import { UilRedo } from '@iconscout/react-unicons'


function App() {

  const [datas, setDatas] = useState({icon: "04d"})
  const [err, setError] = useState(false)
  const [listHourly, setListHourly] = useState([])
  const [city, setCity] = useState("jakarta")

  const getWeatherData = async () => {

    const { nameCity, formattedDate, description, icon, temp, temp_min, temp_max, humidity, feels_like, windSpeed, sunrise, sunset, country, message } = await getdata(city)

    if (message != undefined) {
      setError(message)
    }

    setDatas({
      nameCity, formattedDate, description, icon, temp, temp_min, temp_max, humidity, feels_like, windSpeed, sunrise, sunset, country
    })
  }

  const getDataHourly = async () => {
    const res = await getHourlyForcase(city)
    setListHourly(res)
  }

  useEffect(() => {
    getWeatherData()
    getDataHourly()
  }, [city])

  return (
    <div className='bg-blue-600 w-10/12 lg:w-6/12 mx-auto mt-10 py-8 px-20 text-white rounded-md'>
      <h1 className='text-2xl font-semibold'>Weather Snap</h1>
      <Header setCity={setCity}/>
      <Inputs setCity={setCity} />
      {err ? <p className='mt-3 flex items-center'>Data Kota tidak di temukan <a href="/"><UilRedo className="ms-2" size={20}/></a></p> :
        <>
          <DateAndTime data={datas} />
          <CityDetails data={datas} />
          <Forcash type="Hourly" data={listHourly} />
        </>}
    </div>
  )
}

export default App
