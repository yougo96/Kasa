import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"

import rentalData from '../assets/rental.json';

export function Rental ()   {
    const {urlid} = useParams()

    const thisRentalData = rentalData.filter(i=>i.id==urlid)
    
    return (
        <>
            {thisRentalData.map((data, index) => (
                <div key={index} className="rental-container">
                    <Banner src={data.cover} height="415px"></Banner>
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    {/* <p>{data.host}</p> */}
                    <p>{data.rating}</p>
                    {/* <p>{data.tags}</p> */}
                    <p>{data.description}</p>
                    {/* <p>{data.equipments}</p> */}
                </div>
            ))}
        </>
    )
}
