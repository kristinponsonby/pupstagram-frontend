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
    selectedUser: initialUser,
    posts: [],
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
        return {...state, posts: action.payload};
    case "ADD_POST":
        return  {...state, posts: [action.payload, ...state.posts]};
    case "SET_USER":
        return {...state, user: action.payload};
    case "GET_USER":
        return {...state, selectedUser: action.payload };
     case "CLEAR_USER_SHOW":
        return {...state, selectedUser: initialUser};
    case "CLEAR_USER":
        return {...state, user: initialUser}
    case "DELETE_POST":
         const updatedArray = state.posts.filter((post) => {
            return post.id !== action.payload.id // action will have to looks like {type: "DELETE_POST", payload: {id: 99}}
         }) 
        return {...state, posts: updatedArray};
    default:
        return {...state} 
    }
}






// let arr = [1,2,3,4, 1]


// arr.map((num) => {
//     return num * num
// })
 
// // [5,5,5,5]
// //[ 6,7,8,9]

// arr.filter((num) => {
//     return num < 3
// })

// // [1,2,1]


// let posts = [{id: 5}, {id: 26}]


// function removePost(id){
// return posts.filter(post => {
//     return post.id !== id

// })
// }

