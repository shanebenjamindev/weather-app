import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './module.home.style.css'
import LocationDetail from '../../components/LocationDetail/LocationDetail';
import CurrentWeather from '../DetailCurrent/components/CurrentWeather';
import Forecast from '../DetailCurrent/components/Forecast';
import FileLoading from '../../components/Loading';
import { getCurrentLocationWeather } from '../../redux/actions';

export default function Home() {
    const { loading, error, data } = useSelector((state) => state.currentLocationWeatherReducer);
    const [location, setLocation] = useState('');

    const dispatch = useDispatch()

    useEffect(() => {
        if (loading) {
            return <FileLoading />
        }
    }, [loading])

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getCurrentLocationWeather(location))
    };

    return (
        <div className='home  h-full min-h-screen'>
            <div className='md:w-6/12 m-auto p-5 rounded'>

                <form onSubmit={handleSearch} className='flex m-auto gap-3 justify-center search-container'>
                    <input required className='search-input w-full' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <button type='submit' className='search-btn'><img alt='search' src='/images/location.png' /></button>
                </form>

                {data ? (
                    <div>

                        {data.detail ?
                            <>
                                <LocationDetail location={data.detail.location} />
                                <CurrentWeather current={data.detail.current} />
                                <Forecast forecast={data.forecast.forecast} />
                            </>
                            :
                            <FileLoading />
                        }
                    </div>
                ) : (
                    <h1 className="text-center">
                        {error && <p className="text-red-500">{error}</p>}
                        Please input the city name
                    </h1>
                )}
            </div>
        </div>
    );
}
