import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

export default function useCart() {
    const axiosSecure = useAxiosSecure()
    const user = useAuth()
    // Queries
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5001/api/cart?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]
}
