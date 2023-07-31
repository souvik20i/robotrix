import { useState, useEffect } from "react"
import { useGet, catchAsync } from "../hooks/use-http"
import { DOMAIN } from "../domain"

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
            const { name } = await getRequest(`${DOMAIN}/user/${_id}`, token)
            setUser(name)
        }))()
    }, [])
    return user
}

export default useAuth