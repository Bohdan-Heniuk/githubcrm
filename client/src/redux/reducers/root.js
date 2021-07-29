import {combineReducers} from 'redux'
import {userDataReducer} from "./userData";
import {reposReducer} from "./repos";


export const rootReducer = combineReducers({
    userData : userDataReducer,
    repos : reposReducer,
})