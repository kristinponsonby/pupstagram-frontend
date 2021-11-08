const initialState = {
    dogParks: [],
    selectedDogPark: {
        //include the default null case for each data type
     name: "",
     url: "",
     imageUrl: "",
     address: "",
     zipCode: 0,
     rating: 0,
    }
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
        case "GET_DOG_PARK":
            console.log("Look we are getting a dog park!", action.payload)
            return {...state, selectedDogPark: action.payload }
    default:
        return {...state} 
    }
}

