//This component should fetch to our backend
import { useParams } from 'react-router-dom'
// this connects our component to redux
import { connect } from 'react-redux'
import { getDogPark } from '../redux/actionCreators'
import { useEffect } from 'react'


function DogParkShow({getDogPark}){
    const routeId = useParams().id
    
    //so if routeId changes, it will go ahead and run this again
    useEffect(() => {
        console.log("getting dog parks!")
        getDogPark(routeId)
    }, [getDogPark, routeId])


    return <h1>You're on the show page!</h1>
}
 
export default connect(null, {getDogPark}) (DogParkShow);