import axios from "axios";

export default function useAxiosSecure() {
    const axiosSecure = axios.create({
        baseURL: 'https://bistro-boss-server-phi-two.vercel.app',

    });
    return axiosSecure
}
