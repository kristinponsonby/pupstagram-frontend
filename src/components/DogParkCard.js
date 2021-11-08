import { Link } from 'react-router-dom'

export function DogParkCard({id, name, url, imageUrl, address, rating}) {

    console.log(id)

    return <div className="dog-park-card">
        <img src = {imageUrl} alt={name}></img>
        <h3>{name}</h3>
        <p> {address} </p>
        <p> Rating: {rating} </p>
    </div>
}