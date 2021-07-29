import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = useSelector(state => state.userData.loggedIn)
    const token = useSelector(state => state.userData.token)

    const jwtExpired = token && (() => {
        let decodedToken = jwtDecode(token);
        let currentDate = new Date();

        return decodedToken.exp * 1000 < currentDate.getTime()
    })()

    const render = (props) => {
        if(isLoggedIn && !jwtExpired){
            return <Component {...props} />
        }  else {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

        }
    }

    return (
        <Route
            {...rest}
            render={props =>
                render(props)
            }
        />
    )
}

export default PrivateRoute