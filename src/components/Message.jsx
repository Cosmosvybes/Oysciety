import React, { useState } from "react";
import { FaSms, FaArrowLeft } from "react-icons/fa";
import "./Admin.css";
import "./Message.css";
import Logo from "../assets/Logo_.png";
const Message = () => {
  const [outbox, setOutbox] = useState([
    {
      id: 1,
      message: "Hey meeting you by 12pm on the third main land bridge",
      readStatus: false,
    },
    { id: 2, message: "Hey meeting you by 12pm", readStatus: false },
    { id: 3, message: "Hey meeting you by 12pm", readStatus: false },
    { id: 4, message: "Hey meeting you by 12pm", readStatus: false },
  ]);
  return (
    <>
      <section style={{ backgroundColor: "lightgrey" }}>
        <div className="container">
          <div className="container-child">
            <button>
              <img src={Logo} alt="logo" width={"130px"} height={"50px"}></img>
            </button>
          </div>
        </div>
        <button
          style={{
            color: "green",
            padding: "0px 5px",
            border: "unset",
            backgroundColor: "lightgrey",
            outline:'none'
          }}
          onClick={() => {
            history.back()
          }}
        >
          {" "}
          Go back
        </button>
        <div className="messages-memo">
          <div className="message_">
            <p
              style={{
                color: "green",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              {" "}
              Sent messages
            </p>
            {outbox.map((message) => {
              return (
                <div className="container" key={message.id}>
                  <div className="message">
                    <p key={message.id}> {message.message}</p>{" "}
                    <FaSms style={{ color: "green" }} />{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
