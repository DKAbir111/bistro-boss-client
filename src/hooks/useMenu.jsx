
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"


export default function useMenu() {
    // const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(true)
    // const axiosSecure = useAxiosSecure()
    // useEffect(() => {
    //     axiosSecure.get('/api/menu')
    //         .then(res => {
    //             setItems(res.data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [items, loading]

    const axiosSecure = useAxiosSecure()
    // Queries
    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/menu`)
            return res.data
        }
    })

    return [items, refetch]

}
