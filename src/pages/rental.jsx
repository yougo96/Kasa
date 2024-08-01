import { useParams } from "react-router-dom"
import { Banner } from "../components/banner"

export function Rental ()   {
    const {id} = useParams()
    
    return (
        <div>
            <Banner src="/src/assets/bannerHome.png"></Banner>
            <h1>rental {id}</h1>
        </div>
    )
}
