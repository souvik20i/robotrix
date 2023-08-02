import { useState } from "react"
import { useDispatch } from "react-redux"
import { feedbackActions } from "../store/feedback-slice"

export const useGet = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const getRequest = async (url, token) => {
        try {
            setIsLoading(true)
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            const { success, message, data } = await response.json()
            setIsLoading(false)
            if (!success) throw new Error(message)
            return data
        } catch (err) {
            dispatch(feedbackActions.sendFeedback(err.message))
        }
    }
    return { getRequest, isLoading }
}

export const usePost = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const postRequest = async (url, body) => {
        try {
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
        } catch (err) {
            dispatch(feedbackActions.sendFeedback(err.message))
        }
    }
    return { postRequest, isLoading }
}

export const catchAsync = func => {
    return () => {
        func().catch(console.error)
    }
}