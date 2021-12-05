import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getDogPark, clearDogPark } from '../redux/actionCreators'


function DogParkShow({getDogPark, name, url, imageUrl, address, rating, clearDogPark, id}){
    const routeId = useParams().id
    
    //so if routeId changes, it will go ahead and run this again
    useEffect(() => {
    getDogPark(routeId)
    return clearDogPark
    }, [getDogPark, routeId, clearDogPark])


    return <div className="show-dog-park">
       <h1>{name}</h1>
       <img src={imageUrl} alt={name}></img>
       <a href={url}><p>{address}</p></a>
       <p>{rating}</p>
        </div>
}

const mapStateToProps = (state) => {
    return {...state.selectedDogPark}
}
 
export default connect(mapStateToProps, {getDogPark, clearDogPark}) (DogParkShow);