// import { useRouteError } from "react-router-dom"
import { NavLink, useParams } from 'react-router-dom';

export function Error () {

    // const error = useRouteError()
    const {urlerror} = useParams()
    console.log(urlerror)

    return (
        <div className="error-container">
            { urlerror ? <h1>{urlerror}</h1> : <h1>404</h1> }
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}