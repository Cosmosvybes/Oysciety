import React from 'react'
import Button from './Button'
import './Home.css'
const Home = () => {
    return (
        <>
            <section>
                <div className='admin-board'>
                    <div className='menu-bars'>
                        <Button value='Create Memo' />
                        <Button value='Records' />
                        <Button value='Members' />
                    </div>


                </div>
            </section>

        </>
    )
}

export default Home
