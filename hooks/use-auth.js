import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useAuth = () => {
    const [token, setToken] = useState()
    useEffect(() => {
        (async () => {
            setToken(await AsyncStorage.getItem('token'))
        })()
    }, [])
    return token
}

export default useAuth