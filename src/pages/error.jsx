// import { useRouteError } from "react-router-dom"
import { NavLink } from 'react-router-dom';

export function Error () {

    // const error = useRouteError()

    return (
        <div>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}