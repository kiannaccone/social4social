import React from "react";
import { NavLink, Link } from "react-router-dom"

function NavBar({onLogout}){

    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE',
        }).then((resp) => {
            if (resp.ok) {
                onLogout(null)
            }
        })
    }

    return(
        <div id='navbar'>
            <NavLink to="/home">
                Home
            </NavLink>
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
                Create Post
            </NavLink>
            <button as={Link} to='/' onClick={handleLogOut}>
                Logout
            </button>
        </div>
    )
}

export default NavBar;