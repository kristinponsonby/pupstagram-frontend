
//This is a function that takes in dispatch, and then calls dispatch on whatever action you pass into it. In this case,
//the action is GET_DOG_PARKS
//Thunk allows us to do this, otherwise our fetch is asynchronous and returns a promise 
export const getPosts = () => {
      return dispatch => fetch("http://localhost:3000/posts")
    .then(res => res.json())
    // and then dispatch these posts to the reducer
    .then(posts => dispatch({type: "GET_POSTS", payload: posts})
    )
}


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
    return dispatch => fetch("http://localhost:3000/users", {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(response => {
        if(!response.errors){
            localStorage.token = response.token
            dispatch({type: "SET_USER", payload: response.user})
            } else {
              dispatch({type: "ERROR", payload: response.errors})
            }
        
          })
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
    .then(response => {
      
        if(!response.errors){
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
      } else {
        dispatch({type: "ERROR", payload: response.errors})
      }
    })
  }

  export const submitPost = (post) => {
    const formData = new FormData();
    formData.append('caption', post.caption);
    formData.append('image', post.image);

    return dispatch => {
      fetch("http://localhost:3000/posts", {
     method: "POST", 
     headers: {
        'Authorization' : localStorage.token,
     },
     body: formData
    })
    .then(res => res.json())
    .then(post => dispatch({type: "ADD_POST", payload: post}))
    }
  }

 export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
      headers: {
        'Authorization' : localStorage.token,
      },
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
  }

  export const logout = () => {
      console.log("user logged out")
    localStorage.removeItem("token")
    return ({type: "CLEAR_USER"})
  }


export const clearErrors = () => ({type:"CLEAR_ERROR"})