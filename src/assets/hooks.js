import { useState, useEffect } from "react"
const apiUrl = "http://localhost:3000/"

export function useFetch(url, options = {}) {
    
    const [apiData, setApiData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {

        console.log(apiUrl+url)

        fetch(apiUrl+url.toString(), 
            {
            ...options,
            headers: {
                ...options.headers
            }
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .then((data) => {
            setApiData(data)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error.message)
            console.log(error)
        })
        .finally(
            setError(null)
        )

        }, [])

        return {apiData, isLoading, error}
}

export function useConnexion() {
    const email = sessionStorage.getItem("email")
    const password = sessionStorage.getItem("password")

    const [connected, setConnected] = useState(email && password)

    return {connected}
}