import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


export default function useAdmin() {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    const { data: isAdmin, isPending: adminLoading } = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/user/admin/${user?.email}`)
            console.log(res.data.admin)
            return res.data.admin
        }
    })

    return [isAdmin, adminLoading]
}