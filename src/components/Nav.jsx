import React, { useState } from "react";
import "./Nav.css";
import logo from "../assets/Logo_.png";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPaperPlane,
  FaUnity,
  FaRobot,
  FaSignOutAlt,
  FaList,
  FaTimes,
} from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-menu">
          <button style={{ border: "unset", background: "lightgrey" }}>
            {" "}
            <img src={logo} alt="logo" height={"40px"} width="110px" />{" "}
          </button>
          <div className="nav-bars">
            <div className="nav">
              <FaHome style={{ marginTop: "13px" }} />{" "}
              <Link className="link" to="/home">
                {"News feed "}
              </Link>
            </div>

            <div className="nav">
              <FaPaperPlane
                onClick={() => {
                  alert("ok");
                }}
                style={{ marginTop: "13px" }}
              />{" "}
              <Link className="link" to="/mem">
                {"Memorandum "}
              </Link>
            </div>

            <div className="nav">
              <FaUnity style={{ marginTop: "13px" }} />{" "}
              <Link className="link" to="/sugconnect">
                {"SUG connect"}
              </Link>
            </div>

            <div className="nav">
              <FaRobot style={{ marginTop: "13px" }} />{" "}
              <Link className="link" to="/assistance">
                {"Assitance "}
              </Link>
            </div>
          </div>
          <div className="nav-bars">
            <Link to="/admin" className="link">
              {" "}
              Admin{" "}
            </Link>
            <Link
              className="link"
              style={{ backgroundColor: "red", color: "white", border: "none" }}
            >
              {" "}
              <FaSignOutAlt />{" "}
            </Link>
          </div>
        </div>
      </nav>

      <div className="bars">
        <button onClick={() => alert("ok")}>
          {" "}
          <img src={logo} alt="image logo" width="120px" height="40px" />{" "}
        </button>{" "}
        <FaList
          className="falist"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>

      <div className="overlay" style={{ width: menu ? "100%" : "0" }}>
        <div className="container">
          <ul>
            <li>
              <Link to="/newsfeed" className="link">New feed </Link>
            </li>
            <li>
              {" "}
              <Link to="/newsfeed" className="link">Memorandom </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/newsfeed" className="link">Sug coonnect </Link>{" "}
            </li>
         <li>
              {" "}
              <Link to="/newsfeed" className="link">Memorandom </Link>{" "}
            </li>
          </ul>
          <FaTimes
            style={{ color: "brown", paddingTop: "5px" }}
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
