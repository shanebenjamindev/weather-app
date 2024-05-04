import axios from "axios";
export const key = "9c4633d4bd204cb58b430848240405"

console.log(key);

export const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/",
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