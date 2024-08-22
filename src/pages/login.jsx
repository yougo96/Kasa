import { useState } from "react"

export function Login ()   {

    const handleLogin = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        
        const inputEmail = formData.get("email")
        const inputPassword = formData.get("password")
        let dbEmail = null
        let dbPassword = null

        await fetch("http://localhost:3000/login", {
        })
        .then(response => response.json())
        .then(data => {
            dbEmail= data[0].username
            dbPassword = data[0].password
        })
        .catch(error => console.log(error))

        if (inputEmail === dbEmail && inputPassword === dbPassword) {
            sessionStorage.setItem("email", dbEmail);
            sessionStorage.setItem("password", dbPassword);
            window.location.href = "/"
        }  else {
            setFormValid(false)
        }
    }

    const [formValid, setFormValid] = useState(true)
   
    return (
        <div className="main-container">
            
            <article className="form-container">
                <h1>LogIn</h1>
                {formValid ? null : <h3 role="alert" style={{color:"red"}}>Invalid</h3>}
                <span></span>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Se connecter" />
                </form>
            </article>
            
        </div>
    )
}
