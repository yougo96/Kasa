/**
 * @param {object} children - The tags to be rendered.
 */
export function Tags ({children})   {
    
    return (
       <ul className="tags">
            {children.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
       </ul>
    )
}