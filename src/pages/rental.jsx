import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import { ProfileBadge } from "../components/profileBadge"

import { useFetch, useConnexion } from "../assets/hooks"
import React from "react";
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
                        <React.Fragment key={index}>
                            <Banner key={"ba" + index} src={data.pictures} height="32rem"></Banner>

                            <section key={"ri" + index} className="rental-infos">
                                <div className="rental-infos-1">
                                    <div className="rental-title">
                                        <h1>{data.title}</h1>
                                        <span>{data.location}</span>
                                    </div>
                                    <Tags key={"rita" + index}>{data.tags}</Tags>
                                </div>
                                <div className="rental-infos-2">
                                    <ProfileBadge key={"repr" + index}>{data.host}</ProfileBadge>
                                    <Stars key={"rest" + index}>{data.rating}</Stars>
                                </div>
                            </section>

                            <section key={"rd" + index} className="rental-details">
                                <Collapse key={"rddco" + index} title="Description">
                                    {data.description}
                                </Collapse>
                                
                                <Collapse key={"rdeco" + index} title="Equipements">
                                    {Array.isArray(data.equipments) && data.equipments.map((equipments, index) => (
                                        <p key={"rep" + index}>{equipments}</p>
                                    ))}
                                </Collapse>
                            </section>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}
