import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './module.home.style.css';
import LocationDetail from '../../components/LocationDetail/LocationDetail';

import FileLoading from '../../components/Loading';
import { actSearch, getCurrentLocationWeather } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function Home() {
    const { loading, error, data } = useSelector((state) => state.currentLocationWeatherReducer);
    const { listLocation } = useSelector((state) => state.locationReducer);
    const [location, setLocation] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentLocationWeather(location ? location : "ho chi minh"));
    }, [location]);

    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        setLocation(inputValue);
        dispatch(actSearch(inputValue));
        setShowDropdown(true);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getCurrentLocationWeather(location));
    };

    const renderSearchResults = () => {
        if (listLocation.length === 0) {
            return <div className="no-results">No results found</div>;
        }

        return (
            <ul className="search-results ">
                {listLocation.map((loc, index) => (
                    <Link to={"/"} key={index} className='flex gap-3 items-center my-1' onClick={() => handleLocationSelect(`${loc.name}, ${loc.country}`)} style={{ cursor: "pointer" }}>
                        <img width={20} src='/images/location.png' />
                        {loc.name}, {loc.country}
                    </Link>
                ))}
            </ul>
        );
    };

    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation);
    };

    return (
        <div className="home h-full min-h-screen">
            <div className="md:w-6/12 m-auto p-5 rounded">
                <form onSubmit={handleSearch} className="relative flex m-auto gap-3 justify-center search-container">
                    <input
                        required
                        className="search-input w-full"
                        type="text"
                        value={location}
                        onChange={handleOnChange}
                        onBlur={() => setShowDropdown(false)} // Hide dropdown on blur
                    />
                    <button type="submit" className="search-btn">
                        <img alt="search" src="/images/location.png" />
                    </button>

                    {showDropdown && (
                        <div className="absolute top-16 w-full bg-white search-dropdown rounded-3xl p-2">
                            {renderSearchResults()}
                        </div>
                    )}
                </form>

                {loading && <FileLoading />}


                {data ? (
                    <>
                        <LocationDetail data={data} />
                    </>
                ) : (
                    <FileLoading />
                )}
            </div>
        </div>
    );
}
