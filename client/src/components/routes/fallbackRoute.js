import React from "react";
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const FallbackRoute = () => {
    const isLoggedIn = useSelector(state => state.userData.loggedIn)
    if(isLoggedIn) {
        return <Redirect to='/'/>
    }

    if(isLoggedIn.hasOwnProperty('id')) return <Redirect to='/'/>
    return <Redirect to ='/login'/>
}

export default FallbackRoute