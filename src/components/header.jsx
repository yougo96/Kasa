import { NavLink } from 'react-router-dom';
import kasaLogo from '/kasa.svg'
import './header.scss'

const email = sessionStorage.getItem("email")
const password = sessionStorage.getItem("password")
const isConnected = email && password

const logout = () => {
    sessionStorage.clear();
    location.reload();
}

export function Header ()   {
    
     return (
        <header>
            <nav>
                <div className='nav-group'>
                    <NavLink to="/"><img src={kasaLogo} alt="kasa logo" /></NavLink>
                </div>
                <div className='nav-group'>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                    {/* {isConnected ? <a onClick={logout}>Deconnexion</a> : <NavLink to="/login">Connexion</NavLink> } */}
                </div>                       
            </nav>
        </header>
     )
}