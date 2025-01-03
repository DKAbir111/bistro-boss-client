import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.init'

export default function AuthProvider({ children }) {
    const AuthContext = createContext(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //monitoring state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logoutUser = () => {
        return signOut(auth)
    }

    //return auth info to children component
    const authInfo = {
        createUser,
        loginUser,
        logoutUser,
        loading,
        user
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}
