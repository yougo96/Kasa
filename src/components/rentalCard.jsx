import './rentalCard.scss'

export function RentalCard ({id, title, src})   {
    
    return (
       <article id={id} onClick={() => window.location.href = `/rental/${id}`}>
        <img src={src} alt={title} />
        <div className="rental-filter"></div>
        <h2>{title}</h2>
       </article>
    )
}