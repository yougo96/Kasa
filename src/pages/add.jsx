import { useState } from "react"
import { useFetch, useConnexion } from "../assets/hooks"
import { Navigate } from "react-router-dom"

export function Add ()   {
    
    const { connected } = useConnexion()

    const [formValid, setFormValid] = useState(true)
   
    const { makeRequest, apiData, isLoading, error } = useFetch()


    const handleAdd = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.target)
        formData.set("id", (Math.random()*1000000000000000000).toString(36))

        await makeRequest('rental', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })

        if (!error) {
            window.location.href = "/"
        } else {
            setFormValid(false)
        }
    }

    return (
        connected ?
        (
        <div className="main-container">
            <article className="form-container">
                <h1>Ajouter un logement</h1>
                {formValid ? null : <h3 role="alert" style={{color:"red"}}>Invalid {error}</h3>}
                <span></span>
                <form onSubmit={(e) => handleAdd(e)}>

                    <h3>Logement</h3>
                    <input id="title" type="text" name="title" placeholder="Nom" required/>
                    <input id="description" type="text" name="description" placeholder="description"/>
                    <input id="location" type="text" name="location" placeholder="location" required/>
                    <hr />
                    <h3>Hote</h3>
                    <input id="host" type="text" name="host" placeholder="host name" required/>
                    <hr />
                    <h3>Notation</h3>
                    <div>
                        <label htmlFor="rating">Stars  </label>
                        <input id="rating" type="range" min="1" max="5" step="1" name="rating" required/>
                    </div>
                    <hr />
                    <h3>Equipements</h3>
                    <div>
                        <input id="equipments" type="equipmentInput" name="equipments" placeholder="equipments"/>
                    </div>
                    <hr />
                    <h3>Tags</h3>
                    <div>
                        <input id="tags" type="text" name="tags" placeholder="tags"/>
                    </div>
                    <hr />
                    <h3>Images</h3>
                    <input id="cover" type="text" name="cover" placeholder="cover" required/>
                    <div>
                        <input id="pictures" type="text" name="pictures" placeholder="pictures"/>
                    </div>
                    
                    <input id="submit" type="submit" value="Ajouter" />
                </form>
            </article>
        </div>
        )
        : 
        (
            <Navigate to={"/error/"+"401"} replace={true} />
        )

    )
}
