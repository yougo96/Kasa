import './stars.scss'

export function Stars ({children})   {
    let starsNumber = parseInt(children)
    
    return (
        <div className="stars">
            <ul>
                {[...Array(starsNumber)].map((data, index) => (
                    <li key={index} ><i className="bi bi-star-fill bi-main"></i></li>
                ))}
                {[...Array(5 - starsNumber)].map((data, index) => (
                    <li key={index} ><i className="bi bi-star-fill"></i></li>
                ))}
            </ul>
       </div>
    )
}