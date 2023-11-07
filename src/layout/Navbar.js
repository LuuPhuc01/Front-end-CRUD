import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FullStack CRUD Application </Link>
                    <Link className='btn btn-outline-light' to="/adduser">Add user</Link>
                </div>
            </nav>
        </div>
    )
}
