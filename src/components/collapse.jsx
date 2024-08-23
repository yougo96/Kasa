import { useState } from "react"
import './collapse.scss'


export function Collapse ({title, children})   {

    const [open, setOpen] = useState(false)
    
     return (
        <div id="details" onClick={(e) => setOpen(!open)} open={open}>
            <summary>{title}</summary>
            {children && <div className="details-content">{children}</div> }
        </div>
     )
}