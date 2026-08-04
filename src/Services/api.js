import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const api = axios.create({
    baseURL: apiBaseUrl
});

api.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem("authtoken");
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
