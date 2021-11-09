import { Link } from 'react-router-dom'

export function DogParkCard({id, name, url, imageUrl, address, rating}) {

    console.log(id)

    return <div className="dog-park-card">
        <Link to={`/dogParks/${id}`}><img src = {imageUrl} alt={name}></img></Link>
        <Link to={`/dogParks/${id}`}><h3>{name}</h3></Link>
        <p> {address} </p>
        <p> Rating: {rating} </p>
    </div>
}