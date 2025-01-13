import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import auth from '../Firebase/firebase.init'
import AuthContext from './AuthContext'
import useAxiosPublic from '../hooks/useAxiosPublic'

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    //monitoring state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser?.email }
                axiosPublic.post('/api/jwt', userInfo)
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('access-token', res.data)
                            setLoading(false)
                        }
                    })

            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }

        })
        return () => unsubscribe()
    }, [axiosPublic])

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //login with google
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //logout
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //return auth info to children component
    const authInfo = {
        createUser,
        loginUser,
        logoutUser,
        loading,
        user,
        loginWithGoogle
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}
