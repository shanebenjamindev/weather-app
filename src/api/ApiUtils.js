import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_URL;
export const key = process.env.REACT_APP_API_KEY;

export const api = axios.create({
    baseURL: baseUrl
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