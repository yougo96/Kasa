import { useState } from "react"

const email = sessionStorage.getItem("email")
const password = sessionStorage.getItem("password")
const isConnected = email && password

export function Add ()   {
    
   
    const [formValid, setFormValid] = useState(true)

    const handleAdd = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        formData.set("id", (Math.random()*1000000000000000000).toString(36))

        console.log(Object.fromEntries(formData))

        fetch("http://localhost:3000/rental", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })
        .then(
            response => { 
                response.json()
                console.log("Rental added")
        }
        )
        .catch(error => console.log(error))

    }

    return (
        isConnected ?
        (
        <div className="main-container">
            <article className="form-container">
                <h1>Add</h1>
                {formValid ? null : <h3 role="alert" style={{color:"red"}}>Invalid</h3>}
                <span></span>
                <form onSubmit={(e) => handleAdd(e)}>

                    <input id="title" type="text" name="title" placeholder="Nom" required/>
                    <input id="description" type="text" name="description" placeholder="description"/>
                    <hr />
                    <input id="host" type="text" name="host" placeholder="host name" required/>
                    <hr />
                    <input id="location" type="text" name="location" placeholder="location" required/>
                    <hr />
                    <div>
                        <label htmlFor="rating">Stars  </label>
                        <input id="rating" type="range" min="1" max="5" step="1" name="rating" required/>
                    </div>
                    <hr />
                    <input id="equipments" type="equipments" name="equipments" placeholder="equipments"/>
                    <hr />
                    <input id="tags" type="text" name="tags" placeholder="tags"/>
                    <hr />
                    <input id="cover" type="text" name="cover" placeholder="cover" required/>
                    <hr />
                    <input id="pictures" type="text" name="pictures" placeholder="pictures"/>
                    
                    <input id="submit" type="submit" value="Ajouter" />
                </form>
            </article>
        </div>
        )
        : 
        (
            window.location.href = `/error/`
        )

    )
}
