import { Banner } from "../components/banner"
import { RentalCard } from "../components/rentalCard"

import rentalData from '../assets/rental.json';

export function Home ()   {
   
    return (
        <>
            <Banner src="/bannerHome.png">Chez vous, partout et ailleurs</Banner>
            <div className="home-container">
                {rentalData.map((data, index) => (
                    // <div key={index}>{data.title}</div>
                    <RentalCard key={index} id={data.id} title={data.title} src={data.cover} />
                ))}
            </div>
        </>
    )
}
