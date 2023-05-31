const base_url = 'https://api.openweathermap.org/data/2.5';
const api_key = '11f21ec0a954477898b6ac8a4b864c4d'

import fake from "./currentWeather";
import hourly from "./hourlyFake";


const getdata = async (city) => {
    const res = await fetch(`${base_url}/weather?q=${city}&units=metric&lang=id&appid=${api_key}`)
        .then(res => res.json())

    if(res.cod === "404"){
        return {icon: "04d", message: "data kota tidak tersedia"}
    }

    const formattedDate = await getFormattedDate(res.dt) // data sekarang
    const nameCity = res.name
    const { description, icon } = await getWeatherFormatted(res.weather[0])
    const { temp, temp_min, temp_max, humidity, feels_like } = res.main
    const windSpeed = res.wind.speed
    const sunrise = await getHour(res.sys.sunrise)
    const sunset = await getHour(res.sys.sunset)
    const country = res.sys.country

    return { formattedDate, nameCity, description, icon, temp, temp_min, temp_max, humidity, feels_like, windSpeed, sunrise, sunset, country }
}

const getHourlyForcase = async (city) => {
    const res = await fetch(`${base_url}/forecast?q=${city}&cnt=5&units=metric&appid=${api_key}`)
        .then(res => res.json())

    const list = res.list.map(item => ({
        temp: item.main.temp,
        icon: item.weather[0].icon,
        dt: getHour(item.dt)
    }));
    return list
}

function getWeatherFormatted(data) {
    const description = data.description
    const icon = data.icon

    return { description, icon }
}

function getHour(unixtime) {
    const date = new Date(unixtime * 1000);
    const hours = date.getHours().toString().padStart(2, '0'); // Mengambil jam dengan format dua digit (misalnya 15)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Mengambil menit dengan format dua digit (misalnya 00)

    const formattedTime = hours + ':' + minutes;

    return formattedTime
}



function getFormattedDate() {
    // Contoh Unix timestamp
    const date = new Date();
    const options = {
        weekday: 'long', // Nama hari dalam format panjang
        day: 'numeric', // Angka tanggal
        month: 'long', // Nama bulan dalam format panjang
        year: 'numeric', // Tahun dalam format angka
        hour: 'numeric', // Jam dalam format angka
        minute: 'numeric', // Menit dalam format angka
        timeZoneName: 'short' // Nama zona waktu dalam format singkat (misalnya, WIB)
    };
    const formatter = new Intl.DateTimeFormat('id-ID', options);
    const readableDate = formatter.format(date);
    return readableDate
}


export { getdata, getHourlyForcase }