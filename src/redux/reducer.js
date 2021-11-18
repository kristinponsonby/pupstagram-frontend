const initialDogPark = {
    name: "",
    url: "",
    imageUrl: "",
    address: "",
    zipCode: 0,
    rating: 0
    }


const initialState = {
    dogParks: [],
    selectedDogPark: initialDogPark,
    user: {
        username:""
    }
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
     case "GET_DOG_PARK":
        return {...state, selectedDogPark: action.payload};
    case "CLEAR_DOG_PARK":
        return {...state, selectedDogPark: initialDogPark};
    case "SET_USER":
        console.log(action.payload)
        return {...state, user: action.payload.username};
    case "CLEAR_USER":
            return {...state, user: ""};
    default:
        return {...state} 
    }
}

 