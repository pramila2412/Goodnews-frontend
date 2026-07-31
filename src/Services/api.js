import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.goodnews.meantr.com"
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
