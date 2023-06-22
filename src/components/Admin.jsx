import React, { useState } from 'react'
import './Admin.css'
import { FaMarker, FaLink, FaTrash } from 'react-icons/fa'
import bg from '../assets/pencil.jpg'

const Admin = () => {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');
    const [memo, setMemo] = useState('');
    const [heading, setHeading] = useState('')
    const [cc, setCC] = useState('')
    const [sender, setSender] = useState('');
    const [department, setDepartment] = useState('')
    const [details, setDetails] = useState(false)

    const clearMemo = () => {
        setMemo('');
        setCC('');
        setHeading('')
    }
    const clearMessage = () => {
        setMessage('');
        setSender('');
        setDepartment('')
    }


    const sendMemo = (e) => {
        e.preventDefault();
        alert('ok')
    }

    const sendMessage = (e) => {
        e.preventDefault();
        alert('ok')
    }
    return (
        <>
            <section>
                <div className='admin-board' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                    <div className="over-box">
                        <h1> Overview </h1>
                        <div className="overview">

                            <div className="info-box">
                                <p> Total Data Outward </p>
                                <h2> 1k </h2>
                                <p> Memo sent </p>
                            </div>

                            <div className="info-box">
                                <p> Total Data Inward </p>
                                <h2> 1k </h2>
                                <p> Message recieved </p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-bar">
                        <div className="buttons">
                            <button>send memo </button>
                            <button onClick={() => { setModal(!modal) }} style={{ backgroundColor: !modal && 'red' }}> {modal ? "private message" : "close tab"} </button>
                        </div>
                    </div>


                    <div className="memo-modal">

                        <div className="input-container">
                            <form onSubmit={sendMemo}>
                                <label><b> heading</b>
                                    <input type='text' placeholder='heading' value={heading} onChange={(e) => { setHeading(e.target.value) }} /></label>
                                <label><b> cc</b>
                                    <input type='text' placeholder='Signature' value={cc} onChange={(e) => { setCC(e.target.value) }} /></label>
                                <label><b> body</b>
                                    <textarea type='text' placeholder='What`s the memorandum for today ? ' maxLength='1000' value={memo} onChange={(e) => { setMemo(e.target.value) }} />
                                </label>
                                <div className="send-clear">
                                    <button style={{ color: 'lightgrey', backgroundColor: 'brown' }} onClick={clearMemo}> Clear </button> < button style={{ backgroundColor: 'green', color: 'lightgray' }}> Send </button>
                                </div>
                            </form>
                        </div>

                        <div className="input-container_" style={{ height: !modal && "505px", transition: '0.6s' }}>
                            <form onSubmit={sendMessage}>
                                <label><b> to </b>
                                    <input type='text' placeholder='department' value={department} onChange={(e) => { setDepartment(e.target.value) }} /></label>
                                <label><b> cc</b>
                                    <input type='text' placeholder='Signature' value={sender} onChange={(e) => { setSender(e.target.value) }} /></label>
                                <label><b> body</b>
                                    <textarea type='text' placeholder='What`s the memorandum for today ? ' maxLength='1000' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                                </label>
                                <div className="send-clear">
                                    <button style={{ color: 'lightgrey', backgroundColor: 'brown' }} onClick={clearMessage}> Clear </button> < button style={{ backgroundColor: 'green', color: 'lightgray' }}> Send </button>
                                </div>
                            </form>
                        </div>



                        <div className="outbox">
                            <div className="message"> <p>Message details  </p> <FaLink className='readstatus' />  </div>
                            <div className="message"><p>Message details  </p></div>
                            <div className="message"><p>Message details  </p></div>
                            <div className="message"><p>Message details  </p></div>
                        </div>
                    </div >






                </div >

                <div className="memo-created">
                    <div className="all-memo">
                        <div className="memo-letter" onClick={() => setDetails(!details)}>
                            <div className="header"> <p> ADMISSION LETTER </p> <FaTrash className='delete' /></div>
                            <div className="details" style={{ height: details && "300px" }}></div>
                            <div className="date-time"> <span> 1/2/2023</span> <span> 12:09pm </span></div>
                        </div>
                    </div>
                </div>

            </section >

        </>
    )

}

export default Admin
