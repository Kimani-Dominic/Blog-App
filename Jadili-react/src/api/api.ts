// export const API_BASE_URL = "http://127.0.0.1:8000/"
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;