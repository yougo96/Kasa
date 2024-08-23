import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"
import { useFetch, useConnexion } from "../assets/hooks"

export function About ()   {

    const { apiData, isLoading, error } = useFetch('about')
   
    return (
        <div className="main-container">
            <Banner src="/bannerAbout.png">&nbsp;</Banner>
            <h1>About</h1>
            <div className="about-container">
                {
                    isLoading && <div>Loading</div> || error && <div>Error : {error}</div> ||
                    apiData &&
                    apiData.map((data, index) => (
                        <Collapse key={index} title={data.title}>{data.content}</Collapse>
                    ))
                }
            </div>
        </div>
    )
}
