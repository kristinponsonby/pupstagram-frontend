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
    selectedDogPark: initialDogPark
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
     case "GET_DOG_PARK":
        return {...state, selectedDogPark: action.payload }
    case "CLEAR_DOG_PARK":
        return {...state, selectedDogPark: initialDogPark}
    default:
        return {...state} 
    }
}

 