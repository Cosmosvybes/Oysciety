import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Home.css";
import Post from "./Post";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [memo, setMemo] = useState([
    {
      id: 1,
      message: "Hey meeting you by 12pm on the third main land bridge",
      readStatus: false,
      cc: "registrar",
      date: "12/12/2026",
      time: "12:00",
      to: "the the students",
    },
    {
      id: 2,
      message: "Hey meeting you by 12pm",
      cc: "registrar",
      date: "12/12/2026",
      time: "12:00",
      to: "the the students",
    },
    {
      id: 3,
      message: "Hey meeting you by 12pm",
      cc: "registrar",
      date: "12/12/2026",
      time: "12:00",
      to: "the the students",
    },
    {
      id: 4,
      message: "Hey meeting you by 12pm",
      cc: "registrar",
      date: "12/12/2026",
      time: "12:00",
      to: "the the students",
    },
  ]);
  return (
    <>
      <section className="main-page">
        <Nav />
        <div className="homepage">


          <div className="inbox-outbox">
            <Link to="/inbox" className="link">
              Outbox{" "}
            </Link>
            <Link to="/message" className="link">
              Inbox{" "}
            </Link>
          </div>


        </div>

        <div className="post-memo">
          <div className="post-container">
            <div className="post-box">
              {memo.map((data) => {
                return (
                  <Post
                    heading={data.message}
                    key={data.id}
                    cc={data.cc}
                    date={data.date}
                    time={data.time}
                    to={data.to}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
