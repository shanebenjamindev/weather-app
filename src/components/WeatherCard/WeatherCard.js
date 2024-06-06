import React from 'react';

const WeatherCard = ({ day }) => {
    const { date, day: { condition, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } } = day;

    return (
        <div className="weather-card">
            <h3>{date}</h3>
            <img src={condition.icon} alt={condition.text} />
            <p>Max Temp: {maxtemp_c}°C / {maxtemp_f}°F</p>
            <p>Min Temp: {mintemp_c}°C / {mintemp_f}°F</p>
            <p>Condition: {condition.text}</p>
        </div>
    );
};

export default WeatherCard;
