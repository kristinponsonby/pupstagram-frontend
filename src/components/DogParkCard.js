import { Link } from 'react-router-dom'

export function DogParkCard({id, name, url, imageUrl, address, rating}) {

    return <div className="dog-park-card">
        <Link to={`/dog_parks/${id}`}><img src = {imageUrl} alt={name}></img></Link>
        <Link to={`/dog_parks/${id}`}><h3>{name}</h3></Link>
        <p> {address} </p>
        <p> Rating: {rating}/5</p>
    </div>
}