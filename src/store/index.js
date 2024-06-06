<<<<<<< HEAD
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './RootReducer'
import { thunk } from 'redux-thunk';


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export default store;
=======
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
>>>>>>> 57e407c0a856136c5ff4cdffd32795582e3893fd
