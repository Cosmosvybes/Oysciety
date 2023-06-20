import React from 'react'
import Button from './Button'
import './Home.css'
import { FaMailBulk, FaFacebookMessenger, FaFileAlt } from 'react-icons/fa'
const Home = () => {
    return (
        <>
            <section>
                <div className='admin-board'>
                    <div className='menu-bars'>
                        <p>
                            Admin- 12356
                        </p>
                        <Button value={<FaMailBulk /> } width='300px' fontSize='24px' />
                        <Button value={<FaFacebookMessenger />} width='300px' fontSize='24px' />
                        <Button value={<FaFileAlt />} width='300px' fontSize='24px' />

                    </div>
                    <div className="board"></div>

                </div>
            </section>

        </>
    )
}

export default Home
