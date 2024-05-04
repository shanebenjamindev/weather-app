import React, { useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { actGetWeatherForecast } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function LocationDetail({ locationDetail }) {
    const { location, current } = locationDetail;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetWeatherForecast(location.name))
    }, [location])

    const { data, error, loading } = useSelector(state => state.weatherForecast)

    return (
        <div>
            <h2>Current Weather Information for {location.name}, {location.country}</h2>
            <img alt='weather-icon' src={current.condition.icon} />
            <ul>
                <li>Cloud: {current.cloud}</li>
                <li>Condition: {current.condition.text}</li>
                <li>Feels Like: {current.feelslike_c}°C / {current.feelslike_f}°F</li>
                <li>Gust: {current.gust_kph} kph / {current.gust_mph} mph</li>
                <li>Humidity: {current.humidity}%</li>
                <li>Is Day: {current.is_day ? 'Yes' : 'No'}</li>
                <li>Last Updated: {current.last_updated}</li>
                <li>Last Updated Epoch: {current.last_updated_epoch}</li>
                <li>Precipitation: {current.precip_in} in / {current.precip_mm} mm</li>
                <li>Pressure: {current.pressure_in} in / {current.pressure_mb} mb</li>
                <li>Temperature: {current.temp_c}°C / {current.temp_f}°F</li>
                <li>UV: {current.uv}</li>
                <li>Visibility: {current.vis_km} km / {current.vis_miles} miles</li>
                <li>Wind Degree: {current.wind_degree}</li>
                <li>Wind Direction: {current.wind_dir}</li>
                <li>Wind Speed: {current.wind_kph} kph / {current.wind_mph} mph</li>
            </ul>

            <h2>Weather Forecast</h2>
            {/* <div className="forecast">
                {forecast.forecastday.map((day) => (
                    <WeatherCard key={day.date_epoch} day={day} />
                ))}
            </div> */}
        </div>
    );
}
