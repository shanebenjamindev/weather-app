// WeatherSearch.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchWeatherData } from '../../feature/weather/weatherSlide';
import WeatherForecast from './WeatherForecast';
import { searchForecast } from '../../feature/weather/forecastSlide';
import './style.css'
import search from '../../assets/icons/search.png'
import close from '../../assets/icons/close.png'
import FileLoading from '../Loading';

function WeatherSearch() {
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState('');
    const { data: weatherData, loading } = useSelector((state) => state.weather);
    const { data: forecastData } = useSelector((state) => state.forecast);

    const [searchBox, setSearchBox] = useState(false)

    useEffect(() => {
        dispatch(searchWeatherData(cityName));
        dispatch(searchForecast(cityName ? cityName : "ho chi minh"));
    }, [cityName])

    const handleOnChange = (e) => {
        setSearchBox(true)
        e.preventDefault();
        setCityName(e.target.value)
    };

    const handleSearchForecast = (location) => {
        dispatch(searchForecast(location))
        setSearchBox(false)
    }

    const renderSearchResult = () => {
        { loading && <FileLoading /> }

        return <ul className='absolute rounded-2xl w-full top-9 shadow-md left-0 bg-white' >
            {weatherData?.map((location, index) => (
                <li className='px-3 py-1'
                    onClick={(e) => {
                        e.preventDefault();
                        handleSearchForecast(location.name)
                    }} key={index}>{location.name}, {location.country}</li>
            ))}
        </ul>
    }

    return (
        <div className='home min-h-screen px-5 py-2 w-full'>

            {/* Search */}
            <div className='flex justify-end items-center '>
                <form onSubmit={handleSearchForecast} className={`${searchBox ? "block" : "hidden"} relative w-full md:w-5/12 flex gap-3 md:justify-end sm:justify-center `}>
                    <input
                        required
                        className="search-input w-full bg-white shadow-md"
                        type="text" onChange={handleOnChange} placeholder="Enter city name" />

                    <div className={`${searchBox ? "block" : "hidden"}  bg-white`}>
                        {renderSearchResult()}
                    </div>
                </form>

                {/* Search button */}
                <button style={{ filter: "invert(1)" }} className='p-2' onClick={() => setSearchBox(!searchBox)}>{searchBox ?
                    <img alt='close' className='w-5 h-5' src={close} />
                    : <img alt='search' className='w-5 h-5' src={search} />}</button>
            </div>
            {
                forecastData && <WeatherForecast data={forecastData} />
            }
        </div >
    );
}

export default WeatherSearch;
