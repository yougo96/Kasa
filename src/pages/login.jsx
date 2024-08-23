import { useEffect, useState } from "react"
import { useFetch, useConnexion } from "../assets/hooks"

export function Login ()   {

    const { makeRequest, apiData, isLoading, error } = useFetch()
    const [formValid, setFormValid] = useState(true)

    useEffect(() => {
        makeRequest('login')
    }, [])

    const handleFetchHook = async (event) => {
        event.preventDefault();      
                
        const formData = new FormData(event.target)
        const inputEmail = formData.get("email")
        const inputPassword = formData.get("password")                    
        let dbEmail = apiData[0].username
        let dbPassword = apiData[0].password
        
                
        if (inputEmail === dbEmail && inputPassword === dbPassword && !error) {
            sessionStorage.setItem("email", dbEmail);
            sessionStorage.setItem("password", dbPassword);
            window.location.href = "/"
        }  else {
            setFormValid(false)
        }
    }
       
    return (
        <div className="main-container">
            
            <article className="form-container">
                <h1>LogIn</h1>

                {formValid ? null : <h3 role="alert" style={{color:"red"}}>Invalid {error}</h3>}
                <span></span>
                <form onSubmit={handleFetchHook}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Se connecter" />
                </form>
            </article>
            
        </div>
    )
}
