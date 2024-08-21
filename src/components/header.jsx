import { NavLink } from 'react-router-dom';
import kasaLogo from '/kasa.svg'

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
                    <NavLink to="/login">Connexion</NavLink>
                </div>                       
            </nav>
        </header>
     )
}