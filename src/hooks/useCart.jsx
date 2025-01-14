import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

export default function useCart() {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    // Queries
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/cart?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]
}
