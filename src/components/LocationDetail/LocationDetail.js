import React from 'react';

export default function LocationDetail({ data }) {
    const { location, current, forecast } = data;
    return (
        <div className='flex flex-col items-center text-white p-4'>
            <h2>{location.name}, {location.country}</h2>
            <img className='w-52 h-52' src={current.condition.icon} alt='Weather Icon' />
            <p className='font-bold text-6xl ml-5'>{current.temp_c}&#176;</p>
            <p className='text-xl tracking-widest'>{current.condition.text}</p>
            {/* Other weather details */}
            <div className='flex justify-between w-full mt-4 '>
                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/wind.png' className='h-6 w-6' alt='Wind Icon' />
                        <p>{forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                    </div>
                    <p className='text-base font-semibold'>Chance of Rain</p>
                </div>
                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/drop.png' className='h-6 w-6' alt='Humidity Icon' />
                        <p>{forecast.forecastday[0].day.avghumidity}%</p>
                    </div>
                    <p className='text-base font-semibold'>Humidity</p>
                </div>

                <div className='text-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <img src='/assets/icons/sun.png' className='h-6 w-6' alt='UV Icon' />
                        <p>{forecast.forecastday[0].day.uv}</p>

                    </div>
                    <p className='text-base font-semibold'>UV</p>
                </div>
            </div>

            {/* Forecast */}
        </div>
    );
}
