const initialState = []

export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_REPOS" :
            return action.payload
        case "LOGOUT" :
            return initialState
        default : return state
    }
}