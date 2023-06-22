import React from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-menu">
                    <span> Logo </span>

                    <div className='nav-bars'>
                        <Link className='link'> home </Link >
                        <Link className='link'> memorandum </Link >
                        <Link className='link'>  message </Link>
                    </div>
                    <div className='nav-bars'>
                        <Link className='link'> sign up </Link >
                        <Link className='link'> sign in </Link >

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
