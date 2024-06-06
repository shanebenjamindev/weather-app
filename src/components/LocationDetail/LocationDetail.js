import React from 'react';
import './style.css'
import { WeatherImage } from '../../constants';

export default function LocationDetail({ data }) {
    const { location, current, forecast } = data;

    // console.log(data);
    const renderDailyForecastDaily = () => {
        return forecast.forecastday?.map((item, index) => {
            let date = new Date(item.date)
            let options = { weekday: 'long' }
            let dayName = date.toLocaleDateString('en-US', options);
            dayName = dayName.split(',')[0]
            return (
                <div style={{ backgroundColor: "var(--fade-theme)" }} className='p-3 flex flex-col justify-center items-center rounded-3xl w-24 ' key={index} >
                    <img src={`${WeatherImage[item?.day.condition?.text]}`} className='w-11 h-11' alt={item.day.condition.text} />
                    <p className='flex flex-nowrap'>{dayName}</p>
                    <p className='text-xl font-semibold'>{item.day.avgtemp_c}&#176;</p>
                </div>
            )
        })
    }

    return (
        <div className='text-white my-5'>

            <div className='flex flex-col items-center space-y-5'>
                <h2 className='text-base'>{location.name}, {location.country}</h2>
                <img className='w-52 h-52' src={WeatherImage[current.condition.text]} alt={current.condition.text} />
                <p className='font-bold text-6xl ml-5'>{current.temp_c}&#176;</p>

                <div className='md:flex gap-4 items-center justify-center text-center'>
                    <p className='text-sm p-2 rounded-xl' style={{ backgroundColor: "var(--fade-theme)" }}>{current.condition.text}</p>
                    <p className='text-sm tracking-widest'>feels like: {current.feelslike_c}&#176;</p>
                </div>
            </div>

            {/* Other weather details */}
            <div className='flex justify-between w-full my-4 '>
                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/wind.png' className='h-6 w-6' alt='Wind Icon' />
                        <p>{current.wind_mph}%</p>
                    </div>
                    <p className='text-base font-semibold'>Wind Speed</p>
                </div>
                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/drop.png' className='h-6 w-6' alt='Humidity Icon' />
                        <p>{current.humidity}%</p>
                    </div>
                    <p className='text-base font-semibold'>Humidity</p>
                </div>

                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/sun.png' className='h-6 w-6' alt='UV Icon' />
                        <p>{current.uv}</p>
                    </div>
                    <p className='text-base font-semibold'>UV</p>
                </div>
            </div>

            {/* Daily Forecast */}
            <div className='mt-5'>
                <div className='flex items-center gap-1 text-base'>
                    <img src='/images/calendar.png' className='h-4 w-4' style={{ filter: "invert(1)" }} />
                    <h2 className=''>Daily Forecast</h2>
                </div>
                <div className='daily-overflow flex gap-4 py-4'>
                    {renderDailyForecastDaily()}
                </div>
            </div>
        </div >
    );
}
