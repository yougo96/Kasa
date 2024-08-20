import { Banner } from "../components/banner"
import { RentalCard } from "../components/rentalCard"

const apiRentalsData = await fetch('http://localhost:3000/rental').then(response => response.json())

export function Home ()   {
   
    return (
        <div className="main-container">
            <Banner src="/bannerHome.png">Chez vous, partout et ailleurs</Banner>
            <div className="home-container">
                {apiRentalsData.map((data, index) => (
                    // <div key={index}>{data.title}</div>
                    <RentalCard key={"rc"+index} id={data.id} title={data.title} src={data.cover} />
                ))}
            </div>
        </div>
    )
}
