import { api, key } from '../api/ApiUtils';
import * as actions from './types'

const aqi = "no"
export const actGetCurrentLocationWeather = (location) => {
    return (dispatch) => {
        // dispatch(actGetCurrentLocationWeatherRequest)
        api.get(`/current.json?key=${key}&q=${location}&aqi=${aqi}`)
            .then((result) => {
                dispatch(actGetCurrentLocationWeatherRequest);
                if (result.status === 200) {
                    dispatch(actGetCurrentLocationWeatherSuccess(result.data));

                }
            })
            .catch((error) => {
                const { message } = error.response?.data.error
                console.log(message);
                // const { content } = error.response.data
                dispatch(actGetCurrentLocationWeatherFail(message))
            })
    }
}

const actGetCurrentLocationWeatherRequest = () => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_REQUEST })
const actGetCurrentLocationWeatherSuccess = (data) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_SUCCESS, payload: data })
const actGetCurrentLocationWeatherFail = (error) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_FAIL, payload: error })


export const actGetWeatherForecast = (location) => {
    return (dispatch) => {
        console.log(location);
        dispatch(actGetWeatherForecastRequest);
        api.get(`/forecast.json?key=${key}&q=${location}&days=7&aqi=${aqi}`)
            .then((result) => {
                console.log(result.data);
                dispatch(actGetWeatherForecastSuccess(result.data));
            })
            .catch((error) => {
                const { message } = error.response?.data.error
                dispatch(actGetWeatherForecastFail(message))
            })
    }
}

const actGetWeatherForecastRequest = () => ({ type: actions.GET_WEATHER_FORECAST_REQUEST })
const actGetWeatherForecastSuccess = (data) => ({ type: actions.GET_WEATHER_FORECAST_SUCCESS, payload: data })
const actGetWeatherForecastFail = (error) => ({ type: actions.GET_WEATHER_FORECAST_FAIL, payload: error })
