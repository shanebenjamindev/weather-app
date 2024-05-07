
import * as actions from '../types'

const initialState = {
    loading: false,
    listLocation: "",
    error: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.GET_LOCATION_REQUEST:
            state.loading = true;
            state.listLocation = null
            state.error = null;
            return { ...state }

        case actions.GET_LOCATION_SUCCESS:
            state.loading = false;
            state.listLocation = action.payload;
            state.error = null;
            return { ...state }

        case actions.GET_LOCATION_FAIL:
            state.loading = false;
            state.listLocation = null;
            state.error = action.payload;
            return { ...state }

        default:
            return state;
    }
};

export default locationReducer;
