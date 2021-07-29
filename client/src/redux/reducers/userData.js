const initialState = {
    username : null,
    password : null,
    email : null,
    name : null,
    loggedIn : false,
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN" :
            return action.payload
        case "LOGOUT" :
            return initialState
        default : return state
    }
}