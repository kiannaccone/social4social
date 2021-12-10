import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom"


function NavBar({onLogout}){

    const history = useHistory();
   


    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE',
        }).then((resp) => {
            if (resp.ok) {
                onLogout(null)
            }
            history.push("/home");
        })
    }

    return(
        <div id='navbar'>
            <NavLink className='navlinks' to="/home">
                Home
            </NavLink>
            <NavLink className='navlinks' to="/profile">
                Profile        
            </NavLink>
            <NavLink className='navlinks' to="/follows">
                Follows 
            </NavLink>
            <NavLink className='navlinks' to="/search">
                Search
            </NavLink>
            <NavLink className='navlinks' to='/post'>
                Create Post
            </NavLink>
            <button className="allbuttons" as={Link} to='/' onClick={handleLogOut}>
                Logout
            </button>
        </div>
    )
}

export default NavBar;