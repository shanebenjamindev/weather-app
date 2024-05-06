import { api, key } from '../api/ApiUtils';
import * as actions from './types'

const aqi = "no"
export const getCurrentLocationWeather = (location) => {
    return (dispatch) => {
        dispatch(actGetCurrentLocationWeatherRequest)
        api.get(`/current.json?key=${key}&q=${location}&aqi=${aqi}`)
            .then((result) => {
                if (result.status === 200) {
                    api.get(`/forecast.json?key=${key}&q=${location}&days=7&aqi=${aqi}`)
                        .then((forecastResult) => {
                            dispatch(actGetCurrentLocationWeatherSuccess({
                                detail: result.data,
                                forecast: forecastResult.data,
                            }));
                        })
                }
            })
            .catch((error) => {
                const { message } = error.response?.data.error
                console.log(message);
                dispatch(actGetCurrentLocationWeatherFail(message))
            })
    }
}

const actGetCurrentLocationWeatherRequest = () => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_REQUEST })
const actGetCurrentLocationWeatherSuccess = (data) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_SUCCESS, payload: data })
const actGetCurrentLocationWeatherFail = (error) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_FAIL, payload: error })


