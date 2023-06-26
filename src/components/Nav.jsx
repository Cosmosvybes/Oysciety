import React from 'react'
import './Nav.css'
import logo from '../assets/Logo_.png'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-menu">
                <button style={{border:'unset', background:'lightgrey'}}> <img src={logo} alt='logo' height={'40px'} width='110px' /> </button>
                    <div className='nav-bars'>
                        <Link className='link'> home </Link >
                        <Link className='link'> memorandum </Link >
                        <Link className='link'>  message </Link>
                    </div>
                    <div className='nav-bars'>


                        <Link to='/admin' className='link'> Admin </Link >
                        <Link className='link' style={{ backgroundColor: 'red', color: 'white' , border:'none'}}> sign out </Link >
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
