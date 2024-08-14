import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"

import rentalData from '../assets/rental.json';
import { ProfileBadge } from "../components/profileBadge"

export function Rental ()   {
    const {urlid} = useParams()

    const thisRentalData = rentalData.filter(i=>i.id==urlid)
    
    return (
        <>
            {thisRentalData.map((data, index) => (
                <div key={"rData"+index} className="rental-container">
                    <Banner src={data.pictures} height="415px"></Banner>

                    <section className="rental-infos">
                        <div>
                            <div className="rental-title">
                                <h1>{data.title}</h1>
                                <span>{data.location}</span>
                            </div>
                            <Tags>{data.tags}</Tags>
                        </div>
                        <div>
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
        </>
    )
}
