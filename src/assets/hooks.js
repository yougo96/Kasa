import { useState } from "react"
const apiUrl = "http://localhost:3000/"

export function useFetch() {
    
    const [apiData, setApiData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const makeRequest = async (url, options = {}) => {

        console.log("requesting "+apiUrl+url)

        await fetch(apiUrl+url.toString(), 
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
            if (error.message === "Failed to fetch") {
                setError("403")
            } else {
                setError(error.message)
            }            
        })
        .finally(
            setError(null)
        )
    }

    // console.log(apiData, isLoading, error)
    return { makeRequest, apiData, isLoading, error }

}

export function useConnexion() {
    const email = sessionStorage.getItem("email")
    const password = sessionStorage.getItem("password")

    const [connected, setConnected] = useState(email && password)

    return {connected}
}