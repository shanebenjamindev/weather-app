
import * as actions from '../types'

const initialState = {
    loading: false,
    data: "",
    error: null,
};

const weatherForecast = (state = initialState, action) => {
    switch (action.type) {

        case actions.GET_WEATHER_FORECAST_REQUEST:
            state.loading = true;
            state.data = null
            state.error = null;
            return { ...state }

        case actions.GET_WEATHER_FORECAST_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.GET_WEATHER_FORECAST_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return state;
    }
};

export default weatherForecast;
