import { combineReducers } from "redux"
import currentLocationWeatherReducer from "../redux/Reducer/currentLocationWeatherReducer"
import weatherForecast from "../redux/Reducer/weatherForecast"

const rootReducer = combineReducers({
    currentLocationWeatherReducer,
    weatherForecast
})

export default rootReducer