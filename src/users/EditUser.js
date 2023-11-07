import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })
    const { id } = useParams()

    // const { name, username, email, password } = user
    const onInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/");
    }
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
    return (
        <div>
            <form className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' onSubmit={(e) => onSubmit(e)}>
                <h2 className='text-center m-4'> Edit User</h2>
                <div className='mb-3 '>
                    <label htmlFor='Name' className=' form-label fw-bold'>Name</label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Name'
                        name='name'
                        value={user.name}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label fw-bold'>Username</label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Username'
                        name='username'
                        value={user.username}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Password' className=' form-label fw-bold'>Password</label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Password'
                        name='password'
                        value={user.password}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label fw-bold'>Email</label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Email'
                        name='email'
                        value={user.email}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className=' d-flex justify-content-end'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}
