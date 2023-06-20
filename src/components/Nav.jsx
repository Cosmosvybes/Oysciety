import React from 'react'
import './Nav.css'


const Nav = () => {
    return (
        <>
            <nav>
                <button type='button' >
                    <b> Logo </b>
                </button>

                <input type='text' placeholder='search' value='records' />
            </nav>
        </>
    )
}

export default Nav
