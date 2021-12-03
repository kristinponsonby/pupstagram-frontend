
export function Profile({ username, zipCode, bio, breed  }) { 

    return <div className="profile">
     <h1>My Profile</h1> 
     <p> Username: {username}</p>
     <p>Zip Code: {zipCode} </p>
     <p>Breed: {breed}</p>
     <p>Birthday: </p>
     <p>Bio: {bio}</p>
     </div>
}
