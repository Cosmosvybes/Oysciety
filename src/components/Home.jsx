import React, { useState } from 'react'
import './Home.css'
import bg from '../assets/home.jpg'
import logo from '../assets/Logo_.png'
import { FaSignInAlt } from 'react-icons/fa'


const Home = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [signErr, setSignErr] = useState(false)
    const signIn = (e) => {
        e.preventDefault()
        if (!id || !password) {
            setResponse('enter login details')
            setTimeout(() => { setResponse('') }, 2000)
            return
        }

        fetch(`http://localhost:2006/account/login`, {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({ id: id, password: password })
        })
            .then((response) => {
                return (response.ok)
            })
            .then((data) => {
                setSignErr(true)
                var ID = setTimeout(() => { setResponse("success.") }, 1000);
                setTimeout(function () { location.href = "/admin" }, 3000)
                console.log(data)
            })

        setId('');
        setPassword('')
        console.log(JSON.stringify({ id: id, password: password }))

    }


    return (
        <>
            <section>
                <div className="landing">
                    <button> <img src={logo} alt='logo' height={'40px'} width='110px' /> </button>


                    <div className="login-modal" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='introduction'>
                            <div className="introduction-text">



                                <h1 style={{ color: 'green' }}> Connecting the campus </h1>
                                <h1 style={{ color: 'green' }}> streamline communication for... </h1>
                                <h1 style={{ color: 'brown' }} >Administrators,  Faculty and Students</h1>
                                <div className='paragraph'>
                                    <p> Welcome to our online platform designed to enhance communication and collaboration among the administration,
                                        college faculty, and students. In today's fast-paced educational environment, effective communication plays
                                        a pivotal role in fostering a thriving academic community. Our website serves as a centralized hub where administrators,
                                        faculty members, and students can seamlessly connect, share information, and work together towards the common goal of a successful
                                        and enriching college experience.</p>
                                </div>
                                <div className="signup-signin"> <h2> Sign in now  </h2></div>


                                <div className="signinresponse">
                                    <span style={{ marginTop: '10px', color: !signErr ? "brown" : 'green' }}> {response}</span>
                                </div>

                                <div className="login-modal">
                                    <form onSubmit={signIn} >

                                        <input type='text' placeholder='username' value={id} onChange={(e) => { setId(e.target.value) }} />
                                        <input type='text' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                        <button> <FaSignInAlt /></button>

                                    </form></div>

                                <span className='sign-in'>  <p> Don't have an account yet ?  </p> <button> Sign up </button> </span>
                            </div>

                        </div >

                        <div>

                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Home
