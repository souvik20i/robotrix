import { useState } from "react"

const useHttp = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getRequest = async (url) => {
        const response = await fetch(url)
        setData(await response.json())
    }

    const postRequest = async (url, body) => {
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        setData(await response.json())
    }

    const httpRequest = (url, config = null) => {
        setIsLoading(true)
        if (!config) getRequest(url).catch(setError)
        else postRequest(url, config).catch(setError)
        setIsLoading(false)
        setError(null)
        return data
    }

    return { httpRequest, isLoading, error }
}

export default useHttp