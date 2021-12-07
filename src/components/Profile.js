import { getUser, clearUserShow } from '../redux/actionCreators';
import { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


function Profile({getUser, clearUserShow, selectedUser, username, zipCode, }) { 
    const {id} = useParams()
    console.log(selectedUser)

    useEffect(() => {
        getUser(id)
        return clearUserShow
      }, [getUser, id, clearUserShow])

    return <div className="profile">
     <h1>My Profile</h1> 
     <h2> Username: {selectedUser.username}</h2>
     <h2>Zip Code: {selectedUser.zipCode} </h2>
     </div>
}

const mapStateToProps = (state) =>({
    selectedUser: state.selectedUser
  })

export default connect (mapStateToProps, { getUser, clearUserShow })(Profile)