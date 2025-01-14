import React, { useState } from 'react'

const Auth = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <>
            {
                toggle ?
                    <div>
                        <h1>SignIn</h1>
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