import { useEffect } from "react"
import { getDogParks} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { DogParkCard } from '../components/DogParkCard'
//This useEffect will serve as our componentDidMount. 
//It' saying, whenever you call render, run our useEffect method as long as the variable,
//in this case props.dogParks changes
function DogParkIndex({getDogParks, dogParks}) {
    useEffect(getDogParks, [getDogParks])

        return <div className="dog-park-container">
            {dogParks.map(dogPark => <DogParkCard { ...dogPark} key={dogPark.id}/>)}
            </div>
}

const mapStateToProps = (state) => {
    return {dogParks: state.dogParks}
}
//This is saying use getDogParks from our actionCreators as one of the dispatch methods we can use
export default connect(mapStateToProps, { getDogParks })(DogParkIndex)