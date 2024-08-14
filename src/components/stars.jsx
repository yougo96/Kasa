export function Stars ({children})   {
    let starsNumber = parseInt(children)
    
    return (
        <div className="stars">
            {/* <ul>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
            </ul> */}
            <ul>
                {[...Array(starsNumber)].map((data, index) => (
                    <li key={index} ><i class="bi bi-star-fill bi-main"></i></li>
                ))}
                {[...Array(5 - starsNumber)].map((data, index) => (
                    <li key={index} ><i class="bi bi-star-fill"></i></li>
                ))}
            </ul>
       </div>
    )
}