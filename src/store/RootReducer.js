import { combineReducers } from "redux"
import currentLocationWeatherReducer from "../redux/Reducer/currentLocationWeatherReducer"
import locationReducer from "../redux/Reducer/locationReducer"
import forecastReducer from "../redux/Reducer/forecastReducer"

const rootReducer = combineReducers({
    currentLocationWeatherReducer,
    locationReducer,
    forecastReducer
})

export default rootReducer