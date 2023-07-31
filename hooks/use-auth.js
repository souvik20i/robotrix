import { useState, useEffect } from "react"
import { useGet, catchAsync } from "../hooks/use-http"

import jwtDecode from "jwt-decode"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useAuth = () => {
    const { getRequest } = useGet()
    const [user, setUser] = useState()
    useEffect(() => {
        (catchAsync(async () => {
            const token = await AsyncStorage.getItem('token')
            if (!token) return
            const { _id } = jwtDecode(token)
            const { name } = await getRequest(`http://192.168.90.8:3000/user/${_id}`, token)
            setUser(name)
        }))()
    }, [])
    return user
}

export default useAuth