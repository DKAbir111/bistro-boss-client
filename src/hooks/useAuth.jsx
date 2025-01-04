import { useContext } from "react"
import AuthContext from "../Provider/AuthContext"

export default function useAuth() {
    const { user } = useContext(AuthContext)
    return user;
}
