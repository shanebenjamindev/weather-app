import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import LocationList from '../../components/LocationDetail/LocationDetail';
import Loading from '../../components/Loading';
import './module.style.css'
import LocationDetail from '../../components/LocationDetail/LocationDetail';
import CurrentWeather from '../../pages/DetailCurrent/components/CurrentWeather';
import Forecast from '../../pages/DetailCurrent/components/Forecast';
export default function WeatherApp() {
    const { loading, error, data } = useSelector((state) => state.currentLocationWeatherReducer);

    console.log(data);
    return (
        <div className='home h-screen'>
            <div className='m-auto md:w-6/12'>
                <SearchBar />
                {loading && <Loading />}
                {error && <p className="text-red-500">{error}</p>}
                {data ? (
                    <>
                        <LocationDetail location={data.detail.location} />
                        <CurrentWeather current={data.detail.current} />
                        <Forecast forecast={data.forecast.forecast} />
                    </>
                ) : (
                    <h1 className="text-center">Please input the city name</h1>
                )}
            </div>
        </div>
    );
}
