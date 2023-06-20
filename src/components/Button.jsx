import React from 'react'
import './Button.css'
const Button = ({ value, width, height, fontSize }) => {
    return (
        <>
            <button style={{ width: width, height: height, fontSize: fontSize }}> {value}</button>
        </>
    )
}

export default Button
