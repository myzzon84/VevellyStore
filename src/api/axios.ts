import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://team-online-storage.onrender.com/api/v1/';

const api: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Token ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

api.interceptors.response.use(
	response => response,
	error => {
		console.error('API Error:', error.response?.data || error.message);
		if (error.response?.status === 401) {
			console.log('Токен не дійсний');
		}
		return Promise.reject(error);
	}
);

export default api;
