import { Banner } from "../components/banner"
import { RentalCard } from "../components/rentalCard"
import { NavLink } from "react-router-dom"

const apiRentalsData = await fetch('http://localhost:3000/rental').then(response => response.json())

const email = sessionStorage.getItem("email")
const password = sessionStorage.getItem("password")
const isConnected = email && password

export function Home ()   {
   
    return (
        <div className="main-container">
            <Banner src="/bannerHome.png">Chez vous, partout et ailleurs</Banner>
            <div className="home-container">
                {isConnected ? <NavLink className={"btn-add"} to="/add"><i className="bi bi-house-add"></i></NavLink> : null}
                {apiRentalsData.map((data, index) => (
                    // <div key={index}>{data.title}</div>
                    <RentalCard key={"rc"+index} id={data.id} title={data.title} src={data.cover} />
                ))}
            </div>
        </div>
    )
}
