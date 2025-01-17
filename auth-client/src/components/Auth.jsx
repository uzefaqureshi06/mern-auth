import React, { useState } from 'react'
import { signUp } from '../redux/actions/auth';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const [toggle, setToggle] = useState(true);
    const [viewPassword, setViewPassWord] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleViewPassword = () => {
        setViewPassWord(!viewPassword);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (toggle) {
            //implement signin
        } else {
            dispatch(signUp({ username, email, password }));
            navigate('/')
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
    return (
        <>
            {
                toggle ?
                    <div>
                        <h1>SignIn</h1>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        <input type={viewPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' /><button onClick={handleViewPassword} > {viewPassword ? <i class='bx bx-low-vision'></i> : <i class='bx bxs-low-vision' ></i>} </button>
                        <button onClick={(e) => handleSubmit(e)} >Sign In</button>
                        <p>Don't have an account ?, <button onClick={handleToggle} >Sign up</button></p>
                    </div>
                    :
                    <div>
                        <h1>SignUp</h1>
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' />
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        <input type={viewPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' /><button onClick={handleViewPassword} > {viewPassword ? <i class='bx bx-low-vision'></i> : <i class='bx bxs-low-vision' ></i>} </button>
                        <button onClick={(e) => handleSubmit(e)} >Sign Up</button>

                        <p>Already have an account ?, <button onClick={handleToggle} >Sign in</button></p>
                    </div>
            }


        </>
    )
}

export default Auth