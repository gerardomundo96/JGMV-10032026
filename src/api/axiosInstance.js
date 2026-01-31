import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://697a924a0e6ff62c3c59af46.mockapi.io',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;