import axios from "axios"
import { useEffect, useState } from "react"


export default function useMenu() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:5001/api/menu')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
    }, [])

    return [items, loading]

}
