import * as actions from '../types'

const initialState = {
    loading: false,
    data: "",
    error: null,
};

const currentLocationWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CURRENT_LOCATION_WEATHER_REQUEST:
            state.loading = true;
            state.data = null
            state.error = null;
            return { ...state }

        case actions.GET_CURRENT_LOCATION_WEATHER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.GET_CURRENT_LOCATION_WEATHER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return state;
    }
};

export default currentLocationWeatherReducer;
