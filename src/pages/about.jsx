import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"

const apiAboutData = await fetch('http://localhost:3000/about/').then(response => response.json())

export function About ()   {
   
    return (
        <div className="main-container">
            <Banner src="/bannerAbout.png">&nbsp;</Banner>
            <h1>About</h1>
            <div className="about-container">
                {apiAboutData.map((data, index) => (
                    <Collapse key={index} title={data.title}>{data.content}</Collapse>
                ))}
            </div>
        </div>
    )
}
