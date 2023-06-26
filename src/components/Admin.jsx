import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo_.png";
import "./Admin.css";
import "./Message.css";
import {
  FaChartPie,
  FaChartLine,
  FaTrash,
  FaArrowUp,
  FaSms,
  FaArrowCircleRight,
  FaRobot,
  FaBookOpen,
  FaArrowCircleLeft,
  FaPaperPlane,
} from "react-icons/fa";
import bg from "../assets/home.jpg";
import Nav from "./Nav";

const Admin = () => {
  //calling all past memo records on mount after the admin logged in
  useEffect(() => {
    const memos = () => {
      fetch("http://localhost:2006/memos")
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          setMemolist(response);
        });
    };
    memos();
  }, []);

  const [modal, setModal] = useState(true);
  const [msg, setMsg] = useState(false);
  const [message, setMessage] = useState("");
  const [memo, setMemo] = useState("");
  const [heading, setHeading] = useState("");
  const [cc, setCC] = useState("");
  const [sender, setSender] = useState("");
  const [reciever, setReciever] = useState("");
  const [department, setDepartment] = useState("");
  const [assistance, setAssistance] = useState("");

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

  const [memolist, setMemolist] = useState([]);

  const clearMemo = () => {
    setMemo("");
    setCC("");
    setHeading("");
  };
  const clearMessage = () => {
    setMessage("");
    setSender("");
    setDepartment("");
  };

  const sendMemo = (e) => {
    e.preventDefault();
    if (!heading || !cc || !memo || !sender || !reciever) {
      alert("enter a complete memo details");
      return;
    }
    const body = {
      heading: heading,
      cc: cc,
      body: memo,
      from: sender,
      to: reciever,
    };

    setMemolist(() => {
      return [...memolist, body];
    });

    fetch("http://localhost:2006/memo", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
      });

    setHeading("");
    setCC("");
    setMemo("");
    setSender("");
    setReciever("");
  };
  //  send message  func
  const sendMessage = (e) => {
    e.preventDefault();
    if (!memo || !reciever) {
      alert("enter complete message details");
      return;
    }
    const body = {
      body: memo,
      to: reciever,
    };
    console.log(body);
    setMemo("");
    setSender("");
    setReciever("");
  };

  const askAssistance = (e) => {
    e.preventDefault();
  };

  // function to open the memo letter body
  const openDetails = (id) => {
    setMemolist(
      memolist.map((memo) =>
        memo.id == id ? { ...memo, open: !memo.open } : memo
      )
    );
  };

  // function to delete from the past memo created
  const deleteMemo = (id) => {
    setMemolist(memolist.filter((memo) => memo.id !== id));
  };

  //copy Asssitance text
  const copyText = (e) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(assistance);
  };

  return (
    <>
      {/* <Nav /> */}

      <section style={{ backgroundColor: "lightgrey" }}>
        <div
          className="admin-board"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="over-box">
            <h1 style={{ color: "green", textAlign:'center' }}> Overview </h1>
            <div className="overview">
              <div className="info-box">
                <div className="icon-p">
                  <FaChartLine style={{ marginTop: "3px", color: "green" }} />
                  <p> Total Data Outward </p>
                </div>

                <h2> 1k </h2>
                <p> Memo sent </p>
              </div>

              <div className="info-box">
                <div className="icon-p">
                  <FaChartLine style={{ marginTop: "4px", color: "green" }} />
                  <p> Total Data Inward </p>
                </div>
                <h2> 1k </h2>
                <p> Message recieved </p>
              </div>
            </div>
          </div>
        </div>
        <div className="posted-memo">
          <p
            style={{
              textAlign: "center",
              color: "green",
              textDecoration: "underline",
            }}
          >
            {" "}
            All memo records
          </p>

          {memolist.length > 0 ? (
            <div className="memo-created">
              <div className="all-memo">
                {memolist.map((memodata) => {
                  return (
                    <div className="memo-letter" key={memodata.id}>
                      <div className="header">
                        <p> {memodata.heading}</p>{" "}
                        <div className="open-delete">
                          <FaBookOpen
                            style={{ color: "green" }}
                            onClick={() => {
                              openDetails(memodata.id);
                            }}
                          />
                          <FaTrash
                            className="delete"
                            style={{ color: "red" }}
                            onClick={() => {
                              deleteMemo(memodata.id);
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="details"
                        style={{ height: memodata.open && "300px" }}
                      >
                        <p> {memodata.body}</p>
                      </div>
                      <div className="date-time">
                        <span>
                          {" "}
                          <p>{memodata.date} </p>{" "}
                        </span>{" "}
                        <span>
                          {" "}
                          <p>{memodata.time} </p>{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="nomemo" style={{ textAlign: "center" }}>
              {" "}
              <p> no memo </p>
            </div>
          )}
        </div>

        {/* inbox  */}

        {/* input modal for modal and message  */}
        <div
          className="memo-message-container"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="menu-buttons">
            {" "}
            <FaRobot
              style={{ marginTop: "4px", color: !modal ? "red" : "green" }}
              onClick={() => {
                setModal(!modal);
              }}
            />{" "}
            <button
              style={{ color: !modal && "red" }}
              onClick={() => {
                setModal(!modal);
              }}
            >
              {modal ? "Assistant" : "Close assistant"}
            </button>
            {modal && (
              <FaSms
                style={{ marginTop: "5px", color: "green" }}
                onClick={() => {
                  setMsg(!msg);
                }}
              />
            )}
            {modal ? (
              <button
                onClick={() => {
                  setMsg(!msg);
                }}
              >
                {msg ? "memo" : "message"}
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="memo-modal">
            <div className="memo" style={{ height: modal ? "600px" : "0" }}>
              <form>
                <h1 style={{ color: "green" }}>
                  {!msg ? "new memo" : "new message"}{" "}
                </h1>
                {!msg && (
                  <input
                    type="text"
                    placeholder="heading"
                    value={heading}
                    onChange={(e) => {
                      setHeading(e.target.value);
                    }}
                  />
                )}
                {!msg && (
                  <input
                    type="text"
                    placeholder="from"
                    value={sender}
                    onChange={(e) => {
                      setSender(e.target.value);
                    }}
                  />
                )}
                <input
                  type="text"
                  placeholder="to"
                  value={reciever}
                  onChange={(e) => {
                    setReciever(e.target.value);
                  }}
                />
                {!msg ? (
                  <input
                    type="text"
                    placeholder="cc"
                    value={cc}
                    onChange={(e) => {
                      setCC(e.target.value);
                    }}
                  />
                ) : (
                  ""
                )}
                <textarea
                  maxLength={1000}
                  placeholder="body"
                  value={memo}
                  onChange={(e) => {
                    setMemo(e.target.value);
                  }}
                />
                <button onClick={msg ? sendMessage : sendMemo}>
                  {!msg ? "Publish Memo" : "Send Message"}
                </button>
              </form>
            </div>

            <div
              className="memo-message"
              style={{ height: !modal ? "600px" : "0" }}
            >
              <form>
                <h1 style={{ color: "green" }}> Immediate Assistant </h1>
                <textarea
                  maxLength={500}
                  placeholder="How can help you ?"
                  value={assistance}
                  onChange={(e) => {
                    setAssistance(e.target.value);
                  }}
                />
                <button onClick={askAssistance}> Ask me anything!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
