const initialDogPark = {
    name: "",
    url: "",
    imageUrl: "",
    address: "",
    zipCode: "",
    rating: ""
    }

const initialUser = {
        username: "",
        posts: []
      }

const initialState = {
    dogParks: [],
    selectedDogPark: initialDogPark,
    user: initialUser
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
     case "GET_DOG_PARK":
        return {...state, selectedDogPark: action.payload};
    case "CLEAR_DOG_PARK":
        return {...state, selectedDogPark: initialDogPark};
    case "GET_POSTS":
        return {...state, user: action.payload};
    case "ADD_POST":
        return {...state, user: [action.payload, ...state.user.posts]}
    case "SET_USER":
        return {...state, user: action.payload};
    case "CLEAR_USER":
        return {...state, user: initialUser}
    default:
        return {...state} 
    }
}

 