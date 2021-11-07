export function DogParkCard({name, url, imageUrl, address, rating}) {

    return <div className="dog-park-card">
        <img src = {imageUrl} alt={name}></img>
        <h3>{name}</h3>
        <p> {address} </p>
        <p> Rating: {rating} </p>
    </div>
}