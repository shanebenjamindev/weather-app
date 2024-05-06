import React from 'react';

export default function CurrentWeather({ current }) {
    console.log(current);
    const { astro, day } = current;

    return (
        <div className='text-center'>
            <div className='flex justify-center'>
                <img alt='weather-icon' src={current.condition.icon} />
            </div>
            <h1 className='text-5xl'>{current.temp_c}°C / {current.temp_f}°F</h1>
            <div className='flex gap-10 justify-center'>
                <div>{current.condition.text}</div>
                <div>Feels like: {current.feelsdivke_c}°C</div>
            </div>


        </div>
        // <div className='h-full w-full text-center'>
        //     <div className='flex justify-center'>
        //         <img alt='weather-icon' src={current.condition.icon} />
        //     </div>
        //     <h1 className='text-5xl'>{current.temp_c}°C / {current.temp_f}°F</h1>

        //     <div className='flex gap-10 justify-center'>
        //         <div>Condition: {current.condition.text}</div>
        //         <div>Feels divke: {current.feelsdivke_c}°C / {current.feelsdivke_f}°F</div>
        //     </div>

        //     <div className='flex justify-center gap-10'>

        //         <div>
        //             <p>{current.gust_kph} kph / {current.gust_mph} mph</p>
        //             <p>Gust</p>
        //         </div>


        //         <div>
        //             <p>
        //                 {current.vis_km} km / {current.vis_miles} miles
        //             </p>
        //             <p>
        //                 Visibidivty
        //             </p>
        //         </div>
        //         <div>
        //             <p>
        //                 {current.humidity}%
        //             </p>
        //             <p>
        //                 Humidity
        //             </p>
        //         </div>

        //     </div>
        // </div>

    )

}