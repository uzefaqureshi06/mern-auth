import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/users';

const Users = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const users = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUsers(searchTerm));
    }, [dispatch])
    const handleSearch = () => {
        dispatch(getUsers(searchTerm));
    }
    console.log(users);
    return (
        <>
            <input placeholder='Search Users ... ' onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => handleSearch()} > <i class='bx bx-search-alt-2'></i> </button>
            <div>
                {
                    users?.map((user) => {
                        return (
                            <>
                                <h5>username :{user.username}</h5>
                                <p>Email : {user.email}</p>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users