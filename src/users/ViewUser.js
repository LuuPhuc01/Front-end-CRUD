import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
    return (
        <div>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Information of User</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id: {id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: {user.name} </b>
                            </li>
                            <li className='list-group-item'>
                                <b>Username: {user.username}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Email: {user.email}</b>
                            </li>
                        </ul>
                    </div>
                    <Link className='btn btn-primary my-2' to='/'>Back to Home</Link>
                </div>
            </div>
        </div >
    )
}
