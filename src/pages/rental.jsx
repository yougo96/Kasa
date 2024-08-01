import { useParams } from "react-router-dom"

export function Rental ()   {
    const {id} = useParams()
    
    return (
        <div>
            <h1>rental {id}</h1>
        </div>
    )
}
