import { getUser } from '../redux/actionCreators';
import { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

function Profile({getUser, user, username, zipCode, }) { 
    const routeId = useParams().id

    useEffect(() => {
        getUser(routeId)
        }, [getUser, routeId])
  

    return <div className="profile">
     <h1>My Profile</h1> 
     <h2> Username: {username}</h2>

     <h2>Zip Code: {zipCode} </h2>
     </div>
}

const mapStateToProps = (state) =>{
   return  {...state.user}
  }

export default connect (mapStateToProps, { getUser })(Profile)