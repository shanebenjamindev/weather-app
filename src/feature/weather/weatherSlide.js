// weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { locationEndpoint } from './weatherEndpoint';

// Define the initial state
const initialState = {
    loading: false,
    data: null,
    error: null,
};


// Define the async thunk for fetching weather data
export const searchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (cityName, { rejectWithValue }) => {
        try {
            const response = await axios.get(locationEndpoint(cityName));
            return response?.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create a slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchWeatherData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchWeatherData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(searchWeatherData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

// Export actions and reducer
export const weatherActions = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
