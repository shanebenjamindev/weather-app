import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { forecastEndpoint } from "./weatherEndpoint";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const searchForecast = createAsyncThunk(
    'forecast/fetchWeatherForecast',
    async (cityName, { rejectWithValue }) => {
        try {
            const response = await axios.get(forecastEndpoint(cityName));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchForecast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchForecast.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(searchForecast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const forecastActions = forecastSlice.actions;
export const forecastReducer = forecastSlice.reducer;

