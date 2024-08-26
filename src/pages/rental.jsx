import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import { ProfileBadge } from "../components/profileBadge"

import { useFetch, useConnexion } from "../assets/hooks"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

export function Rental ()   {
    const {urlid} = useParams()

    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect   (() => {
        makeRequest('rental/' + urlid)
    }, [])

    let tempArray = [];
    tempArray.push(apiData)
    
    return (
        <div className="main-container">
            <div className="rental-container">
                {
                    
                    isLoading && <div>Loading</div> ||
                    error && (
                        <Navigate to={"/error/"+error} replace={true} />
                    ) ||                    
                    apiData &&
                    tempArray.map((data, index) => (
                        <>
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
                                <Collapse key={"co-rd" + index} title="Description">
                                    {data.description}
                                </Collapse>
                                
                                <Collapse key={"co-re" + index} title="Equipements">
                                    {Array.isArray(data.equipments) && data.equipments.map((equipments, index) => (
                                        <p key={"re" + index}>{equipments}</p>
                                    ))}
                                </Collapse>
                            </section>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
