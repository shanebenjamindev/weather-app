import React from 'react';
import './style.css'
import { WeatherImage } from '../../../constants';
import wind from '../../../assets/icons/wind.png'
import drop from '../../../assets/icons/drop.png'
import sun from '../../../assets/icons/sun.png'
import calendar from '../../../assets/icons/calendar.png'
export default function WeatherForecast({ data }) {
    const { location, current, forecast } = data;

    const renderDailyForecastDaily = () => {
        return forecast.forecastday?.map((item, index) => {
            let date = new Date(item.date)
            let options = { weekday: 'long' }
            let dayName = date.toLocaleDateString('en-US', options);
            dayName = dayName.split(',')[0]
            return (
                <div className='p-3 flex flex-col justify-center items-center rounded-3xl md:min-w-24 bg-blue-400' key={index} >
                    <img src={`${WeatherImage[item?.day.condition?.text]}`} className='w-11 h-11' alt={item.day.condition.text} />
                    <p className='flex flex-nowrap'>{dayName}</p>
                    <p className='text-xl font-semibold'>{item.day.avgtemp_c}&#176;</p>
                </div>
            )
        })
    }

    return (
        <div className='text-white my-5 md:flex min-h-screen md:w-10/12 m-auto'>

            {/* Location detail */}
            <div className='flex flex-col items-center space-y-5 md:w-7/12'>
                <h2 className='text-2xl font-semibold text-center'>{location.name}, {location.country}</h2>
                <img className='sm:w-52 sm:h-52 md:w-80 md:h-80' src={WeatherImage[current.condition.text]} alt={current.condition.text} />
                <p className='font-bold text-6xl ml-5'>{current.temp_c}&#176;</p>

                <div className='flex gap-4 items-center justify-center text-center'>
                    <p className='text-sm p-2 rounded-xl' style={{ backgroundColor: "var(--fade-theme)" }}>{current.condition.text}</p>
                    <p className='text-sm tracking-widest'>feels like: {current.feelslike_c}&#176;</p>
                </div>
            </div>

            {/* Other weather details */}
            <div className='md:w-5/12'>
                <div className='flex my-10'>
                    <div className='text-center other-weather-items'>
                        <div className='flex text-center items-center gap-2 justify-center'>
                            <img src={wind} className='h-6 w-6' alt='Wind Icon' />
                            <p>{current.wind_mph}%</p>
                        </div>
                        <p className='text-base font-semibold'>Wind Speed</p>
                    </div>
                    <div className='text-center other-weather-items'>
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={drop} className='h-6 w-6' alt='Humidity Icon' />
                            <p>{current.humidity}%</p>
                        </div>
                        <p className='text-base font-semibold'>Humidity</p>
                    </div>

                    <div className='text-center other-weather-items'>
                        <div className='flex items-center gap-2 justify-center'>
                            <img src={sun} className='h-6 w-6' alt='UV Icon' />
                            <p>{current.uv}</p>
                        </div>
                        <p className='text-base font-semibold'>UV</p>
                    </div>
                </div>

                {/* Daily Forecast */}
                <div className='mt-5'>
                    <div className='flex items-center gap-1 text-base'>
                        <img src={calendar} alt='calendar' className='h-5 w-5' style={{ filter: "invert(1)" }} />
                        <h2 className=''>Next 7 Days</h2>
                    </div>
                    <div className=' flex md:flex-wrap gap-4 py-4 daily-overflow'>
                        {renderDailyForecastDaily()}
                    </div>
                </div>
            </div>
        </div >
    );
}
