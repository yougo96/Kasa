import './rentalCard.scss'

const email = sessionStorage.getItem("email")
const password = sessionStorage.getItem("password")
const isConnected = email && password

const deleteRental = async (event, id) => {
    event.stopPropagation()

    await fetch(`http://localhost:3000/rental/${id}`, {
        method: "DELETE",
    }).then(
        console.log(id, " Rental deleted")
    )
    .catch(error => console.log(error))

    window.location.reload()
}

export function RentalCard ({id, title, src})   {
    
    return (
       <article id={id} onClick={() => window.location.href = `/rental/${id}`}>
        <img src={src} alt={title} />
        <div className="rental-filter"></div>
        <h2>{title}</h2>
        {isConnected ? <button className='btn-delete' onClick={(e) => deleteRental(e, id)}><i className="bi bi-trash"></i></button> : null}
       </article>
    )
}