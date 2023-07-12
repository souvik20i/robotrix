import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth()

const useAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(() => onAuthStateChanged(auth, user => setUser(user)), [])
    return user
}

export default useAuth