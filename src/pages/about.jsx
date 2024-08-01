import { Banner } from "../components/banner"
import { Collapse } from "../components/collapse"

import aboutData from '../assets/about.json';

export function About ()   {
   
    return (
        <div>
            <Banner src="/bannerAbout.png">&nbsp;</Banner>
            <h1>About</h1>
            <div className="about-container">
                {aboutData.map((data, index) => (
                    <Collapse key={index} title={data.title}>{data.content}</Collapse>
                ))}
            </div>
        </div>
    )
}
