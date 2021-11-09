const initialState = {
    dogParks: [],
    selectedDogPark: {
        //include the default null case for each data type
     name: "",
     url: "",
     imageUrl: "",
     address: "",
     zipCode: null,
     rating: null
    }
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
     case "GET_DOG_PARK":
        return {...state, selectedDogPark: action.payload }
    default:
        return {...state} 
    }
}

