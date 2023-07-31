import { useState, useEffect } from "react"
import { useGet, catchAsync } from "../hooks/use-http"
import { DOMAIN } from "../domain"

import jwtDecode from "jwt-decode"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useAuth = () => {
    const { getRequest } = useGet()
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    useEffect(() => {
        (catchAsync(async () => {
            const token = await AsyncStorage.getItem('token')
            if (!token) return
            setToken(token)
            const { _id } = jwtDecode(token)
            const { name } = await getRequest(`${DOMAIN}/user/${_id}`, token)
            setUser(name)
        }))()
    }, [])
    return { user, token }
}

export default useAuth