import { useContext } from "react"
import AuthContext from "../Provider/AuthContext"

export default function useAuth() {
    const { user, logoutUser, loading } = useContext(AuthContext)
    return { user, logoutUser, loading };
}
