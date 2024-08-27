import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import { ProfileBadge } from "../components/profileBadge"

import { useFetch } from "../assets/hooks"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

export function Rental ()   {
    const {urlid} = useParams()

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect   (() => {
        makeRequest('rental/' + urlid)
    }, [])
    
    return (
        <div className="main-container">
            <div className="rental-container">
                {
                    
                    isLoading && <div>Loading</div> ||
                    error && (
                        <Navigate to={"/error/"+error} replace={true} />
                    ) ||                    
                    apiData &&
                    <>
                        <Banner src={apiData.pictures} height="32rem"></Banner>

                        <section className="rental-infos">
                            <div className="rental-infos-1">
                                <div className="rental-title">
                                    <h1>{apiData.title}</h1>
                                    <span>{apiData.location}</span>
                                </div>
                                <Tags>{apiData.tags}</Tags>
                            </div>
                            <div className="rental-infos-2">
                                <ProfileBadge>{apiData.host}</ProfileBadge>
                                <Stars>{apiData.rating}</Stars>
                            </div>
                        </section>

                        <section className="rental-details">
                            <Collapse title="Description">
                                {apiData.description}
                            </Collapse>
                            
                            <Collapse title="Equipements">
                                {Array.isArray(apiData.equipments) && apiData.equipments.map((equipments, index) => (
                                    <p key={"rep" + index}>{equipments}</p>
                                ))}
                            </Collapse>
                        </section>
                    </>
                }
            </div>
        </div>
    )
}
