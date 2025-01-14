import axios from "axios";

export default function useAxiosPublic() {
    const axiosPublic = axios.create({
        baseURL: 'https://bistro-boss-server-phi-two.vercel.app',
    })

    return axiosPublic
}
