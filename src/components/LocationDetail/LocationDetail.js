import React, { useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { actGetWeatherForecast } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function LocationDetail({ location }) {
    return (
        <div>
            <h2>Dự báo thời tiết {location.name}, {location.country}</h2>
        </div>
    );
}
