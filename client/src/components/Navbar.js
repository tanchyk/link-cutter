import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    // const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        // history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-2" style={{padding: '0 2rem'}}>
                <a href="/" className="brand-logo">Link Cutter</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    );
}