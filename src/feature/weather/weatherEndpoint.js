
import { key, baseUrl } from '../../api/ApiUtils';

const aqi = "no"

export const forecastEndpoint = (param) => `${baseUrl}/forecast.json?key=${key}&q=${param}&days=7&aqi=no&alerts=no`
export const locationEndpoint = (param) => `${baseUrl}/search.json?key=${key}&q=${param}&aqi=${aqi}`
export const locationForecastEndpoint = (param) => `${baseUrl}/current.json?key=${key}&q=${param}&aqi=${aqi}`