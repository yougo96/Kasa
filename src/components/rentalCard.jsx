import './rentalCard.scss'
import { useFetch, useConnexion } from "../assets/hooks"

export function RentalCard ({id, title, src})   {

    const { connected } = useConnexion()
    const { makeRequest, apiData, isLoading, error } = useFetch()

    const handleDeleteRental = async (event) => {
        event.stopPropagation()
        makeRequest('rentals/'+id, {
            method: "DELETE"
        })
        window.location.reload()
    }
    
    return (
       <article id={id} onClick={() => window.location.href = `/rental/${id}`}>
        <img src={src} alt={title} />
        <div className="rental-filter"></div>
        <h2>{title}</h2>
        {connected ? <button className='btn-delete' onClick={(e) => handleDeleteRental(e)}><i className="bi bi-trash"></i></button> : null}
       </article>
    )
}