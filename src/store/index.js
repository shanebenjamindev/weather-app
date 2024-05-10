// store.js
import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from '../feature/weather/weatherSlide';
import { forecastReducer } from '../feature/weather/forecastSlide';
const store = configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer,
    },
});

export default store;
