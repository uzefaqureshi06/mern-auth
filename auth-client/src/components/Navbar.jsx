import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('profile');
    const handelLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <div>
                <NavLink to='/'>Home</NavLink>
                &nbsp;&nbsp;
                {
                    isAuthenticated ?
                        <button onClick={() => handelLogout()} >Logout</button>
                        :
                        <NavLink to='/auth'>Sign Up </NavLink>

                }
            </div>
        </>
    )
}

export default Navbar