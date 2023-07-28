import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useAuth = () => {
    const [username, setUsername] = useState()
    useEffect(() => {
        (async () => setUsername(await AsyncStorage.getItem('username')))()
    }, [])
    return username
}

export default useAuth