import './tags.scss'

export function Tags ({children})   {
    
    return (
       <ul className="tags">
            {Array.isArray(children) && 
                children.map((data, index) => (
                    <li key={index}>{data}</li>
                ))
            }             
       </ul>
    )
}