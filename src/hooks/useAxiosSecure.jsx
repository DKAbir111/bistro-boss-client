import axios from "axios";

export default function useAxiosSecure() {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5001',

    });
    return axiosSecure
}
