export function DogParkCard({name, url, image_url, address, rating}) {

    return <div className="card">
        <img src = {image_url} alt={name}></img>
        <h3>{name}</h3>
        <p> {url} </p>
        <p> {address} </p>
        <p> Rating: {rating} </p>
    </div>
}