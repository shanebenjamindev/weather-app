// WeatherWidget.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather, addLocation, removeLocation } from '../redux/weatherSlice';
import axios from 'axios';

const WeatherWidget = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchWeather({ lat: latitude, lon: longitude }));
        });
    }, [dispatch]);

    const handleSubmit = () => {
        dispatch(fetchWeather({ location }));
        setLocation('');
    };

    const handleAddLocation = () => {
        dispatch(addLocation(location));
    };

    const handleRemoveLocation = (index) => {
        dispatch(removeLocation(index));
    };

    return (
        <View>
            <Text>Weather Forecast</Text>
            <TextInput
                placeholder="Enter location"
                value={location}
                onChangeText={(text) => setLocation(text)}
            />
            <Button title="Search" onPress={handleSubmit} />
            <Button title="Add Location" onPress={handleAddLocation} />
            {weather.loading && <Text>Loading...</Text>}
            {weather.error && <Text>{weather.error}</Text>}
            {weather.data && (
                <View>
                    <Text>Location: {weather.data.location.name}</Text>
                    <Text>Temperature: {weather.data.current.temp_c}°C</Text>
                    {/* Display other weather data as needed */}
                </View>
            )}
            <Text>Locations</Text>
            <FlatList
                data={weather.locations}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item}</Text>
                        <Button title="Remove" onPress={() => handleRemoveLocation(index)} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default WeatherWidget;
