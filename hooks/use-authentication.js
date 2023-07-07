import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth()

const useAuthentication = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, [])

    return user
}

export default useAuthentication