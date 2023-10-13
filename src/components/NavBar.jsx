import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

function NavBar() {
    return (
        <>
        <nav id="navbar">
            <NavLink id="navA" to="/">Home</NavLink>
            
            <NavLink id="navB" to="/posts">Post</NavLink>
        </nav>
        </>
    );
}

export default NavBar;