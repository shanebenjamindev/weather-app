import axios from "axios";
<<<<<<< HEAD
export const key = "9c4633d4bd204cb58b430848240405"

console.log(key);

export const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/",
=======

export const baseUrl = process.env.REACT_APP_BASE_URL;
export const key = process.env.REACT_APP_API_KEY;

export const api = axios.create({
    baseURL: baseUrl
>>>>>>> 57e407c0a856136c5ff4cdffd32795582e3893fd
})

api.interceptors.request.use((config) => {
    // const accessToken = localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER_LOGIN")).token : "";

    config.headers = {
        ...config.headers,
        key: key,
        Authorization: `${key}`,
    };
    return config;

});