import { combineReducers } from "redux"
import currentLocationWeatherReducer from "../redux/Reducer/currentLocationWeatherReducer"

const rootReducer = combineReducers({
    currentLocationWeatherReducer,
})

export default rootReducer