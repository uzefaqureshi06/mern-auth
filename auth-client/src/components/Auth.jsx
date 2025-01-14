import React, { useState } from 'react'

const Auth = () => {
    const [toggle, setToggle] = useState(true);
    const [viewPassword, setViewPassWord] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleViewPassword = () => {
        setViewPassWord(!viewPassword);
    }
    return (
        <>
            {
                toggle ?
                    <div>
                        <h1>SignIn</h1>
                        <input type='text' placeholder='Enter your email' />
                        <input type={viewPassword ? 'text' : 'password'} placeholder='Enter your password' /><button onClick={handleViewPassword} > {viewPassword ? <i class='bx bx-low-vision'></i> : <i class='bx bxs-low-vision' ></i>} </button>
                        <p>Don't have an account ?, <button onClick={handleToggle} >Sign up</button></p>
                    </div>
                    :
                    <div>
                        <h1>SgnUp</h1>
                        <p>Already have an account ?, <button onClick={handleToggle} >Sign in</button></p>
                    </div>
            }


        </>
    )
}

export default Auth