import { combineReducers } from "redux"
import currentLocationWeatherReducer from "../redux/Reducer/currentLocationWeatherReducer"
import locationReducer from "../redux/Reducer/locationReducer"

const rootReducer = combineReducers({
    currentLocationWeatherReducer,
    locationReducer
})

export default rootReducer