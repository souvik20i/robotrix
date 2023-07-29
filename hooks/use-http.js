import { useState } from "react"

export const useGet = () => {
    const [isLoading, setIsLoading] = useState(false)
    const getRequest = async (url) => {
        setIsLoading(true)
        const response = await fetch(url)
        const { success, message, data } = await response.json()
        setIsLoading(false)
        if (!success) throw new Error(message)
        return data
    }
    return { getRequest, isLoading }
}

export const usePost = () => {
    const [isLoading, setIsLoading] = useState(false)
    const postRequest = async (url, body) => {
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const { success, message, data } = await response.json()
        setIsLoading(false)
        if (!success) throw new Error(message)
        return data
    }
    return { postRequest, isLoading }
}

export const catchAsync = func => {
    return () => {
        func().catch(console.error)
    }
}