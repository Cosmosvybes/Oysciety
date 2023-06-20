import React from 'react'
import './Nav.css'
import Button from './Button'


const Nav = () => {
    return (
        <>
            <nav>
                <button type='button' >
                    <h1> Logo </h1>
                </button>
                <span>
                    <input type='text' placeholder='search records' required /> <Button value='Get records' width='100px' height='40px' />
                </span>

            </nav>
        </>
    )
}

export default Nav
