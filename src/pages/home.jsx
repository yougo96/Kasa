import { Banner } from "../components/banner"
import { RentalCard } from "../components/rentalCard"
import { NavLink } from "react-router-dom"
import { useFetch, useConnexion } from "../assets/hooks"
import { useEffect } from "react"

import './home.scss'

export function Home ()   {

    const { connected } = useConnexion()
    const { makeRequest, apiData, isLoading, error } = useFetch()

    useEffect(() => {
        makeRequest('rental')
    }, [])
   
    return (
        <div className="main-container">
            <Banner src="/bannerHome.png">Chez vous, partout et ailleurs</Banner>
            <div className="home-container">
                {connected ? <NavLink className={"btn-add"} to="/add"><i className="bi bi-house-add"></i></NavLink> : null}
                {
                    error && <div>Error : {error}</div> || isLoading && <div>Loading</div> ||
                    apiData &&
                    apiData.map((data, index) => (
                        // <div key={index}>{data.title}</div>
                        isLoading ? 
                            <div key={"rc"+index}>Loading</div>
                        : 
                            <RentalCard key={"rc"+index} id={data.id} title={data.title} src={data.cover} />                                        
                    ))
                }
            </div>
        </div>
    )
}
