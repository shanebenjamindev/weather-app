import React from 'react';

export default function Forecast({ forecast }) {

    return (
        <div className='h-full'>
            <h2 className='text-2xl'>Dự báo thời tiết 7 ngày tới:</h2>
            <div>
                <div className='flex'>
                    {forecast.forecastday.map((day, index) => (
                        <div key={index}>
                            <p>Date: {day.date}</p>
                            <p>Max Temp: {day.day.maxtemp_c}°C</p>
                            <p>Min Temp: {day.day.mintemp_c}°C</p>
                            <p>Condition: {day.day.condition.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
