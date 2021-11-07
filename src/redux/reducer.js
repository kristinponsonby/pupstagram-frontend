const initialState = {
    dogParks: []
}

export function reducer(state=initialState, action){
    switch (action.type) {
    case "GET_DOG_PARKS":
        return {...state, dogParks: action.payload};
    default:
        return {...state} 
    }
}

