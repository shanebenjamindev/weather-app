
import { key, baseURL } from '../../api/ApiUtils';

const aqi = "no"

export const forecastEndpoint = (param) => `${baseURL}/forecast.json?key=${key}&q=${param}&days=7&aqi=no&alerts=no`
export const locationEndpoint = (param) => `${baseURL}/search.json?key=${key}&q=${param}&aqi=${aqi}`
export const locationForecastEndpoint = (param) => `${baseURL}/current.json?key=${key}&q=${param}&aqi=${aqi}`