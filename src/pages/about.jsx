import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { useFetch, useConnexion } from "../assets/hooks"
import { useEffect } from "react"

export function About ()   {

    const { makeRequest, apiData, isLoading, error } = useFetch('about')

    useEffect(() => {
        makeRequest('about')
    }, [])
   
    return (
        <div className="main-container">
            <Banner src="/bannerAbout.png">&nbsp;</Banner>
            <h1>About</h1>
            <div className="about-container">
                {
                    error && <div>Error : {error}</div> || isLoading && <div>Loading</div> || 
                    apiData &&
                    apiData.map((data, index) => (
                        <Collapse key={index} title={data.title}>{data.content}</Collapse>
                    ))
                }
            </div>
        </div>
    )
}
