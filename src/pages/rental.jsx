import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import { ProfileBadge } from "../components/profileBadge"

import { useEffect, useState } from "react"

export function Rental ()   {
    const {urlid} = useParams()

    const [rental, setRental] = useState([])
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
      console.log("http://localhost:3000/rental/" + urlid.toString());

        fetch("http://localhost:3000/rental/" + urlid.toString())
            .then(response => {

                setFetched(true)

                if (response.ok) {
                    response.json()
                    .then((data) => {
                        let tempArray = []
                        tempArray.push(data)
                        setRental(tempArray)
                    })
                } else {
                    setRental(null)
                    throw new Error(response.status)
                }
            })
            .catch((error) => {
                setFetched(false)
                console.log(error)
            })

    }, [urlid])

    console.log(rental)
    
    return fetched ? (     
            <div className="main-container">
                {rental.map((data, index) => (
                    <div key={"rData"+index} className="rental-container">
                        <Banner src={data.pictures} height="32rem"></Banner>

                        <section className="rental-infos">
                            <div className="rental-infos-1">
                                <div className="rental-title">
                                    <h1>{data.title}</h1>
                                    <span>{data.location}</span>
                                </div>
                                <Tags>{data.tags}</Tags>
                            </div>
                            <div className="rental-infos-2">
                                <ProfileBadge>{data.host}</ProfileBadge>
                                <Stars>{data.rating}</Stars>
                            </div>
                        </section>

                        <section className="rental-details">
                            <Collapse key={"co-rd"+index} title="Description">
                                {data.description}
                            </Collapse>
                            <Collapse key={"co-re"+index} title="Equipements">
                                {data.equipments.map((equipments, index) => (<p key={"re"+index}>{equipments}</p>))}
                            </Collapse>
                        </section>
                        
                    </div>
                ))}
            </div>
    )
    : (        
        <div className="main-container">
            <h1>Loading</h1>
            {
            rental ? (<h2>please wait</h2>) : (window.location.href = `/error/`)
            }
        </div>
        
    )
}
