
//This is a function that takes in dispatch, and then calls dispatch on whatever action you pass into it. In this case,
//the action is GET_DOG_PARKS
//Thunk allows us to do this, otherwise our fetch is asynchronous and returns a promise 
export const getDogParks = () => {
    return dispatch => fetch("http://localhost:3000/dog_parks")
    .then(res => res.json())
    // and then dispatch these dogpark to our reducer
    .then(dogParks => dispatch({type: "GET_DOG_PARKS", payload: dogParks})
    )
}

//for show page
export const getDogPark = (id) => {
    return dispatch => fetch(`http://localhost:3000/dog_parks/${id}`)
    .then(res => res.json())
    // and then dispatch these dogpark to our reducer
    .then(dogPark => dispatch({type: "GET_DOG_PARK", payload: dogPark})
    )
}

export const clearDogPark = () => ({type: "CLEAR_DOG_PARK"})

export const submitSignup = (user) => {
   return dispatch => fetch("http://localhost:3000/users",  {
    method: "POST", 
    headers:  {
        'Content-Type': 'application/json',        
    },     
    body: JSON.stringify(user),  
   })
   .then(res => res.json())
   .then(console.log)
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions",  {
     method: "POST", 
     headers:  {
         'Content-Type': 'application/json',        
     },     
     body: JSON.stringify(user),  
    })
    .then(res => res.json())
    .then(console.log)
 }
