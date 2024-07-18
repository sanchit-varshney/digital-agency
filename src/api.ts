import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            // Handle token expiration
            localStorage.removeItem('token');
            // Optionally, redirect to login page or refresh token
        }
        return Promise.reject(error);
    }
);

export default api;
