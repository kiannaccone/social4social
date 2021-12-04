import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div>
            <NavLink to="/profile">
                Profile        
            </NavLink>
            <NavLink to="/follows">
                Follows 
            </NavLink>
            <NavLink to="/search">
                Search
            </NavLink>
            <NavLink to='/post'>
                Post
            </NavLink>
            <NavLink to="/logout">
                Logout
            </NavLink>
        </div>
    )
}

export default NavBar;