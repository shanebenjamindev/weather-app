import { api, key } from '../api/ApiUtils';
import * as actions from './types'

const aqi = "no"
const forecastEndpoint = (param) => `${api}/forecast.json?key=${key}&q=${param}&days=7&aqi=no&alerts=no`
const locationEndpoint = (param) => `${api}/search.json?key=${key}&q=${param}&aqi=${aqi}`
const locationForecastEndpoint = (param) => `${api}/current.json?key=${key}&q=${param}&aqi=${aqi}`


export const getCurrentLocationWeather = (param) => {
  return (dispatch) => {
    if (param?.length === 0) {
      dispatch(actGetCurrentLocationWeatherRequest)

      api.get(forecastEndpoint("ho chi minh"))
        .then((result) => {
          if (result.status === 200) {
            dispatch(actGetCurrentLocationWeatherSuccess(result.data))
          }
          else {
            console.log("Unexpected status code:", result);
          }

        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("not found:");
          }
        })
    }
    else {
      dispatch(actGetCurrentLocationWeatherRequest)

      api.get(forecastEndpoint("ho chi minh"))
        .then((result) => {
          if (result.status === 200) {
            dispatch(actGetCurrentLocationWeatherSuccess(result.data))
          }
          else {
            console.log("Unexpected status code:", result);
          }

        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("not found:");
          }
        })
    }
  }
}

const actGetCurrentLocationWeatherRequest = () => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_REQUEST })
const actGetCurrentLocationWeatherSuccess = (data) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_SUCCESS, payload: data })
const actGetCurrentLocationWeatherFail = (error) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_FAIL, payload: error })

export const actSearch = (input) => {
  return (dispatch) => {
    dispatch(actSearchRequest)
    api.get(locationEndpoint(input))
      .then((result) => {
        if (result.status === 200) {
          dispatch(actSearchSuccess(result.data))
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

const actSearchRequest = () => ({ type: actions.GET_LOCATION_REQUEST })
const actSearchSuccess = (data) => ({ type: actions.GET_LOCATION_SUCCESS, payload: data })



export const actLocationForecast = (param) => {
  return (dispatch) => {

    dispatch(actLocationForecastRequest)
    api.get(locationForecastEndpoint(param))
      .then((result) => {
        if (result.status === 200) {
          dispatch(actLocationForecastSuccess(result.data))
        }
      })
      .catch((error) => {
        const { message } = error.response?.data.error
        console.log(error);
        // dispatch(actLocationForecastFail(message))
      })
  }
}

const actLocationForecastRequest = () => ({ type: actions.GET_FORECAST_REQUEST })
const actLocationForecastSuccess = (data) => ({ type: actions.GET_FORECAST_SUCCESS, payload: data })
// const actLocationForecastFail = (error) => ({ type: actions.GET_CURRENT_LOCATION_WEATHER_FAIL, payload: error })
