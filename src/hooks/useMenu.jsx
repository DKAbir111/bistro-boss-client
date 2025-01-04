import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure"


export default function useMenu() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/api/menu')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
    }, [])
    return [items, loading]

}
