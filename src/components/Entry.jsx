import marker from "../assets/marker.png"
export default function Entry(props){
    return(
        <div className="container">
            <article>
            <img src={props.entry.img.src} alt={props.entry.img.alt}/>
            <div className="info">
                <div className="marker">
                    <img src={marker} alt="marker pin"/>
                    <span>{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink}>View of Google Maps</a>
                </div>
                <h2>{props.entry.title}</h2>
                <p className="date">{props.entry.dates}</p>
                <p className="about">{props.entry.text}</p>
            </div>
        </article>
        </div>
    )
}