import './tags.scss'

export function Tags ({children})   {
    
    return (
       <ul className="tags">
            {Array.isArray(children) && 
                children.map((data, index) => (
                    <li key={"tag"+index}>{data}</li>
                ))
            }             
       </ul>
    )
}