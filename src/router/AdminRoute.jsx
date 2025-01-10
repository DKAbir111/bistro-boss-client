import { useContext } from "react"
import AuthContext from "../Provider/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"

export default function AdminRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin()
    const location = useLocation()
    if (loading && adminLoading) return <div>Loading...</div>

    if (user && isAdmin) {
        return children
    }
    return (

        <Navigate to={'/login'} state={location.pathname} replace>

        </Navigate>

    )
}
