import './collapse.scss'

export function Collapse ({title, children})   {
    
     return (
        <details>
            <summary>{title}</summary>
            <div className="details-content">{children}</div>
        </details>
     )
}