import React from 'react';
import {ImExit} from "react-icons/all";
import {useDispatch} from "react-redux";
import {logout} from "../redux/actions/auth";

const Navbar = () => {
    const dispatch = useDispatch()
    return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo">Github CRM</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li onClick={() => dispatch(logout())}><a href="#"><ImExit/></a></li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;