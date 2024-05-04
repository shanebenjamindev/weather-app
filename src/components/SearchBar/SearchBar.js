// components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actGetCurrentLocationWeather } from '../../redux/actions';
import './module.searchbar.style.css'

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(actGetCurrentLocationWeather(location))
    };

    return (
        <form onSubmit={handleSearch} className='flex m-auto gap-3 justify-center search-container'>
            <input required className='search-input w-full' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type='submit' className='search-btn' onClick={handleSearch}><img alt='search' src='/images/location.png' /></button>
        </form>
    );
};

export default SearchBar;
