import globe from "../assets/globe.png"
export default function NavBar(){

    return (
        <nav>
            <img src={globe} alt="an icon of the globe"/>
            <span>My Travel Journey</span>
        </nav>
    )
}