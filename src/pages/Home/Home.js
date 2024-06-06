import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './module.home.style.css';
import LocationDetail from '../../components/LocationDetail/LocationDetail';
import FileLoading from '../../components/Loading';
import { actLocationForecast, actSearch, getCurrentLocationWeather } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function Home() {
    const { loading, error, data } = useSelector((state) => state.currentLocationWeatherReducer);
    const { listLocation } = useSelector((state) => state.locationReducer);

    const [location, setLocation] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentLocationWeather(location));
    }, [location]);

    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        setLocation(inputValue);
        dispatch(actSearch(inputValue));
        setShowDropdown(true);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(actLocationForecast(e.target[0].value));
    };

    const handleLocationSelect = (locationName) => {
        console.log(locationName);
    };

    const handleDropdownBlur = () => {
        setShowDropdown(false);
    };

    const renderSearchResults = () => {
        if (listLocation && listLocation.length > 0) {
            return (
                <div className='absolute top-13 bg-white w-full rounded-3xl p-4' onBlur={handleDropdownBlur}>
                    <ul className="search-results">
                        {listLocation.map((loc, index) => (
                            <li
                                key={index}
                                onClick={() => handleLocationSelect(loc.name)}
                                style={{ cursor: "pointer" }}
                            >
                                <img width={20} src='/images/location.png' alt="location" />
                                {loc.name}, {loc.country}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="min-h-screen home">
            <div className="md:w-6/12 m-auto p-3 rounded h-full relative">
                <form onSubmit={handleSearch} className=" flex m-auto gap-3 justify-center search-container">
                    <input
                        required
                        className="search-input w-full"
                        type="text"
                        value={location}
                        onChange={handleOnChange}
                        onBlur={() => setShowDropdown(false)}
                    />
                    <button type="submit" className="search-btn">
                        <img alt="search" src="/images/location.png" />
                    </button>
                </form>

                <div className={`${showDropdown ? "block" : "hidden"}`}>
                    {renderSearchResults()}
                </div>
                {loading && <FileLoading />}
                {data ? <LocationDetail data={data} /> : null}
            </div>
        </div>
    );
}
