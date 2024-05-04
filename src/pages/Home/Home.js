import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import LocationList from '../../components/LocationDetail/LocationDetail';
import Loading from '../../components/Loading';
import './module.home.style.css'
export default function Home() {
    const { loading, error, data } = useSelector((state) => state.currentLocationWeatherReducer);

    return (
        <div className='home h-screen'>
            <div className='m-auto md:w-6/12'>
                <SearchBar />
                {loading && <Loading />}
                {error && <p className="text-red-500">{error}</p>}
                {data ? (
                    <LocationList locationDetail={data} />
                ) : (
                    <h1 className="text-center">Please input the city name</h1>
                )}
            </div>
        </div>
    );
}
