import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";



export default function useAxiosSecure() {
    const navigate = useNavigate()
    const { logoutUser } = useAuth()
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5001',
    });

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response?.status;
        console.log("Error in the interceptor", status);
        if (status === 403 || status === 401) {
            navigate('/login')
            logoutUser()
        }
        return Promise.reject(error);
    });

    return axiosSecure;
}
