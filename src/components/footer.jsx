import kasaLogo from '/kasa.svg'
import './footer.scss'

export function Footer ()   {
    
     return (
        <footer>
            <img src={kasaLogo} alt="kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
     )
}