// src/api/axios/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://www.omdbapi.com/',
	timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		config.params = {
			...config.params,
			apikey: process.env.REACT_APP_OMDB_API_KEY,
		};
		return config;
	},
	(error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.code === 'ECONNABORTED') {
			console.error("Request timed out.");
		} else {
			console.error("API Error:", error.response?.data?.Error || error.message);
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
